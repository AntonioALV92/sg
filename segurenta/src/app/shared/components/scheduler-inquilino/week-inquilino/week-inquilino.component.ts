import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { DayViewHourSegment } from 'calendar-utils';
import { fromEvent } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { addDays, isSameDay, isSameMonth, addMinutes, endOfWeek } from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Colors } from './helpers/constants';
import { formatDate } from '@angular/common';
import { CalendarioService } from 'src/app/services/calendario/calendario.service';
import * as moment from 'moment';
import { CatalogosService } from 'src/app/services/catalogos/catalogos.service';
import { Controller } from './helpers/controller';

@Component({
  selector: 'app-week-inquilino',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './week-inquilino.component.html',
  styleUrls: ['./week-inquilino.component.css']
})
export class WeekInquilinoComponent implements OnChanges {

  @Input() public viewDate: Date;
  @Input() public listDates: any;
  @Input() public listDisponibilidad: any;

  public showForm: boolean;
  public topDiv: number;
  public leftDiv: number;
  public locale: string;
  public dragToCreateActive = false;
  public events: CalendarEvent[] = [];
  public eventsTempo: CalendarEvent[] = [];
  public eventsDispo: CalendarEvent[] = [];
  public newEvent: CalendarEvent;
  public refresh: Subject<any> = new Subject();

  private controller: Controller = new Controller();

  constructor(private modal: NgbModal, private cdr: ChangeDetectorRef,
              private service: CalendarioService, private catalog: CatalogosService) {
    this.showForm = false;
    this.locale = 'es-Mx';
  }

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.cancelNewEvent();
        this.refreshTwo();
      }
    }
  ];

  eventTimesChanged({ event, newStart, newEnd }: CalendarEventTimesChangedEvent): void {
    if (this.validationTimeDate(newStart, newEnd)) {
      this.cancelNewEvent();
      return;
    }
    this.events = this.events.map(iEvent => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd
        };
      }
      return iEvent;
    });
    this.newEvent.end = newEnd;
    this.newEvent.start = newStart;
  }

  handleEvent(action: string, event: CalendarEvent): void {
    if (event.title !== 'Nueva Cita') {
      console.log('event CLick');
    }
  }

  startDragToCreate(segment: DayViewHourSegment, mouseDownEvent: MouseEvent, segmentElement: HTMLElement) {
    if (segment.date < new Date()) {
      return 0;
    }
    this.events = this.eventsTempo;
    this.getPosition(mouseDownEvent);
    const dragToSelectEvent: CalendarEvent = this.controller.generateEvent(this.events.length);
    dragToSelectEvent.actions = this.actions;
    dragToSelectEvent.start = segment.date;

    this.events = [...this.events, dragToSelectEvent];
    const segmentPosition = segmentElement.getBoundingClientRect();
    this.dragToCreateActive = true;
    const endOfView = endOfWeek(this.viewDate);

    fromEvent(document, 'mousemove')
      .pipe(
        finalize(() => {
          if (!dragToSelectEvent.end) {
            const minutesDiff = this.controller.ceilToNearest(mouseDownEvent.clientY - segmentPosition.top, 60);
            const daysDiff = this.controller.floorToNearest(
                mouseDownEvent.clientX - segmentPosition.left,
                segmentPosition.width
              ) / segmentPosition.width;

            const newEnd = addDays(addMinutes(segment.date, minutesDiff), daysDiff);
            if (newEnd > segment.date && newEnd < endOfView) {
              dragToSelectEvent.end = newEnd;
            }
          }
          this.newEvent = dragToSelectEvent;
          this.showForm = true;
          delete dragToSelectEvent.meta.tmpEvent;
          this.dragToCreateActive = false;
          this.refreshTwo();
          if (this.validationTimeDate(this.newEvent.start, this.newEvent.end)) {
            this.cancelNewEvent();
          }
        }),
        takeUntil(fromEvent(document, 'mouseup'))
      )
      .subscribe((mouseMoveEvent: MouseEvent) => {
        const minutesDiff = this.controller.ceilToNearest(mouseMoveEvent.clientY - segmentPosition.top, 60);
        const daysDiff = this.controller.floorToNearest(
            mouseMoveEvent.clientX - segmentPosition.left,
            segmentPosition.width
          ) / segmentPosition.width;

        const newEnd = addDays(addMinutes(segment.date, minutesDiff), daysDiff);
        if (newEnd > segment.date && newEnd < endOfView) {
          dragToSelectEvent.end = newEnd;
        }
        this.refreshTwo();
      });
  }

  private validationTimeDate(start: Date, end: Date): boolean {
    const minutes = moment(end).diff(moment(start), 'minutes');
    if (minutes > 240 || minutes < 60) {
      alert('El tiempo es invalido');
      return true;
    }
    return false;
  }

  private refreshTwo(): void {
    this.events = [...this.events];
    this.cdr.detectChanges();
  }

  private getPosition(e: any): void {
    this.leftDiv = e.clientX - e.layerX + 34;
    this.topDiv = e.target.offsetTop + e.target.offsetHeight + 116;
  }

  private formatDates(): string {
    return formatDate(this.newEvent.start, 'fullDate', this.locale);
  }

  private cancelNewEvent(): void {
    this.events = this.eventsTempo;
    this.showForm = false;
  }

  private saveNewEvent() {
    const req = {
      id_broker: 1,
      idPropiedad: 2,
      fecha_inicio: this.newEvent.start,
      fecha_fin: this.newEvent.end,
      estatus: 1
    };

    this.service.requestDate(req, this.viewDate.getMonth());
    this.cancelNewEvent();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.listDates) {
      if (changes.listDates.currentValue) {
        this.builEvents();
      }
    }
    if (changes.listDisponibilidad) {
      if (changes.listDisponibilidad.currentValue) {
        this.builDisponibilidad();
      }
    }
  }

  private builEvents(): void {
    this.events = this.controller.builEvents(this.listDates);
    this.eventsTempo = this.events;
  }

  private builDisponibilidad(): void {
    this.eventsDispo = this.controller.builEventsDispo(this.listDisponibilidad);
  }
}
