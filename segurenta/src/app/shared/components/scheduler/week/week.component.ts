import { ChangeDetectionStrategy, ViewChild, TemplateRef, ChangeDetectorRef, Component, OnInit, Input, SimpleChanges,
  OnChanges } from '@angular/core';
import { CalendarEvent, CalendarEventTitleFormatter, CalendarEventAction, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { DayViewHourSegment } from 'calendar-utils';
import { fromEvent } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours, addMinutes, endOfWeek } from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Colors } from './helpers/constants';
import { formatDate } from '@angular/common';
import { CalendarioService } from 'src/app/services/calendario/calendario.service';
import * as moment from 'moment';
import { CatalogosService } from 'src/app/services/catalogos/catalogos.service';

function floorToNearest(amount: number, precision: number) {
  return Math.floor(amount / precision) * precision;
}

function ceilToNearest(amount: number, precision: number) {
  return Math.ceil(amount / precision) * precision;
}
// export class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
//   weekTooltip(event: CalendarEvent, title: string) {
//     if (!event.meta.tmpEvent) {
//       return super.weekTooltip(event, title);
//     }
//   }

//   dayTooltip(event: CalendarEvent, title: string) {
//     if (!event.meta.tmpEvent) {
//       return super.dayTooltip(event, title);
//     }
//   }
// }

@Component({
  selector: 'app-week',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit, OnChanges {

  @Input() public viewDate: Date;
  @Input() public listDates: any;

  public activeDayIsOpen: boolean;
  public showForm: boolean;
  public topDiv: number;
  public leftDiv: number;
  public locale: string;
  public dragToCreateActive = false;
  public events: CalendarEvent[] = [];
  public eventsTempo: CalendarEvent[] = [];
  public newEvent: CalendarEvent;
  public refresh: Subject<any> = new Subject();

  // public listDates: any;
  public evento: any;
  public catBancos: any;

  constructor(private modal: NgbModal, private cdr: ChangeDetectorRef,
              private service: CalendarioService, private catalog: CatalogosService) {
    this.activeDayIsOpen = true;
    this.showForm = false;
    this.locale = 'es-Mx';
  }

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil-alt"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        // this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        // this.handleEvent('Deleted', event);
      }
    }
  ];
  actions2: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        // this.handleEvent('Deleted', event);
      }
    }
  ];

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }

  eventTimesChanged({ event, newStart, newEnd }: CalendarEventTimesChangedEvent): void {
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
    // this.handleEvent('Dropped or resized', event);
    console.log(this.events);
  }

  handleEvent(action, event: CalendarEvent): void {
    console.log('event CLick');
    console.log('action', action);
    console.log('event', event);
    // console.log('event', mouseDownEvent);
    // this.getPosition(mouseDownEvent);
    // this.showForm = true;
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter(event => event !== eventToDelete);
  }

  // startDragToCreate(segment: DayViewHourSegment, mouseDownEvent: MouseEvent, segmentElement: HTMLElement) {
  //   this.events = this.eventsTempo;
  //   this.getPosition(mouseDownEvent);
  //   const dragToSelectEvent: CalendarEvent = {
  //     id: this.events.length,
  //     title: 'Nuevo Cita',
  //     start: segment.date,
  //     meta: {
  //       tmpEvent: true
  //     },
  //     actions: this.actions2,
  //     draggable: true,
  //     resizable: {
  //       beforeStart: true,
  //       afterEnd: true
  //     }
  //   };
  //   this.events = [...this.events, dragToSelectEvent];
  //   const segmentPosition = segmentElement.getBoundingClientRect();
  //   this.dragToCreateActive = true;
  //   const endOfView = endOfWeek(this.viewDate);

  //   fromEvent(document, 'mousemove')
  //     .pipe(
  //       finalize(() => {
  //         if (!dragToSelectEvent.end) {
  //           const minutesDiff = ceilToNearest(mouseDownEvent.clientY - segmentPosition.top, 60);
  //           const daysDiff =
  //             floorToNearest(
  //               mouseDownEvent.clientX - segmentPosition.left,
  //               segmentPosition.width
  //             ) / segmentPosition.width;

  //           const newEnd = addDays(addMinutes(segment.date, minutesDiff), daysDiff);
  //           if (newEnd > segment.date && newEnd < endOfView) {
  //             dragToSelectEvent.end = newEnd;
  //           }
  //         }
  //         this.newEvent = dragToSelectEvent;
  //         this.showForm = true;
  //         delete dragToSelectEvent.meta.tmpEvent;
  //         this.dragToCreateActive = false;
  //         this.refreshTwo();
  //       }),
  //       takeUntil(fromEvent(document, 'mouseup'))
  //     )
  //     .subscribe((mouseMoveEvent: MouseEvent) => {
  //       const minutesDiff = ceilToNearest(mouseMoveEvent.clientY - segmentPosition.top, 30);

  //       const daysDiff =
  //         floorToNearest(
  //           mouseMoveEvent.clientX - segmentPosition.left,
  //           segmentPosition.width
  //         ) / segmentPosition.width;

  //       const newEnd = addDays(addMinutes(segment.date, minutesDiff), daysDiff);
  //       if (newEnd > segment.date && newEnd < endOfView) {
  //         dragToSelectEvent.end = newEnd;
  //       }
  //       this.refreshTwo();
  //     });
  // }

  private refreshTwo() {
    this.events = [...this.events];
    this.cdr.detectChanges();
  }

  private getPosition(e: any) {
    this.leftDiv = e.clientX - e.layerX + 34;
    this.topDiv = e.target.offsetTop + e.target.offsetHeight + 116;
  }

  private formatDates() {
    return formatDate(this.newEvent.start, 'fullDate', this.locale);
  }

  private cancelNewEvent() {
    this.events = this.eventsTempo;
    this.showForm = false;
  }

  private saveNewEvent() {
    // const old = moment(e.fecha_inicio, 'DD-MM-YYYY HH:mm:ss').toDate() < new Date() ? true : false;
    this.events.forEach( event => {
      event.title = 'Cita dia 1',
      event.actions = this.actions;
      event.color = Colors.yellow;
    });
    this.showForm = false;
    this.eventsTempo = this.events;
  }

  private hourSegmentModifier(segment) {
    if (segment.date.getHours() < 9) {
      segment.cssClass = 'cal-day-segment-disabled';
    }
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.listDates) {
      if (changes.listDates.currentValue) {
        this.builEvents();
      }
    }
  }

  private builEvents() {
    this.events = [];
    this.listDates.forEach(e => {
      if (e.estatus === 3 || e.estatus === 2) {
        const old = moment(e.fecha_inicio, 'DD-MM-YYYY HH:mm:ss').toDate() < new Date() ? true : false;
        const dragEvent: CalendarEvent = {
          id: e.id,
          title: e.nombre_inquilino,
          start: moment(e.fecha_inicio, 'DD-MM-YYYY HH:mm:ss').toDate(),
          end: moment(e.fecha_fin, 'DD-MM-YYYY HH:mm:ss').toDate(),
          color: old ? Colors.red : Colors.yellow,
          actions: old ? null : this.actions2,
        };
        this.events = [...this.events, dragEvent];
      }
    });

    this.eventsTempo = this.events;
  }
}
