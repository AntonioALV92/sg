import { ChangeDetectionStrategy, ViewChild, TemplateRef, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarEventTitleFormatter, CalendarEventAction, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { DayViewHourSegment } from 'calendar-utils';
import { fromEvent } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours, addMinutes, endOfWeek } from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Colors } from './helpers/constants';
import { formatDate } from '@angular/common';

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
export class WeekComponent implements OnInit {

  public activeDayIsOpen: boolean;
  public showForm: boolean;
  public topDiv: number;
  public leftDiv: number;
  public locale: string;
  public viewDate: Date = new Date();
  public dragToCreateActive = false;
  public events: CalendarEvent[] = [];
  public eventsTempo: CalendarEvent[] = [];
  public newEvent: CalendarEvent;
  public refresh: Subject<any> = new Subject();

  constructor(private modal: NgbModal, private cdr: ChangeDetectorRef) {
    this.activeDayIsOpen = true;
    this.showForm = false;
    this.locale = 'es-Mx';
  }

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil-alt"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];
  actions2: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
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
    this.handleEvent('Dropped or resized', event);
    console.log(this.events);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    console.log('event CLick');
    // this.modalData = { event, action };
    // this.modal.open(this.modalContent, { size: 'lg' });
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter(event => event !== eventToDelete);
  }

  startDragToCreate(segment: DayViewHourSegment, mouseDownEvent: MouseEvent, segmentElement: HTMLElement) {
    this.events = this.eventsTempo;
    this.getPosition(mouseDownEvent);
    const dragToSelectEvent: CalendarEvent = {
      id: this.events.length,
      title: 'Nuevo Cita',
      start: segment.date,
      meta: {
        tmpEvent: true
      },
      actions: this.actions2,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    };
    this.events = [...this.events, dragToSelectEvent];
    const segmentPosition = segmentElement.getBoundingClientRect();
    this.dragToCreateActive = true;
    const endOfView = endOfWeek(this.viewDate);

    fromEvent(document, 'mousemove')
      .pipe(
        finalize(() => {
          if (!dragToSelectEvent.end) {
            const minutesDiff = ceilToNearest(mouseDownEvent.clientY - segmentPosition.top, 60);
            const daysDiff =
              floorToNearest(
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
        }),
        takeUntil(fromEvent(document, 'mouseup'))
      )
      .subscribe((mouseMoveEvent: MouseEvent) => {
        const minutesDiff = ceilToNearest(mouseMoveEvent.clientY - segmentPosition.top, 30);

        const daysDiff =
          floorToNearest(
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
    // this.events = [{
    //   start: addHours(startOfDay(new Date()), 9),
    //   end: addHours(startOfDay(new Date()), 11),
    //   title: 'Cita dia 1',
    //   color: Colors.yellow,
    //   actions: this.actions,
    //   resizable: {
    //     beforeStart: true,
    //     afterEnd: true
    //   },
    //   draggable: true
    // }];
  }
}
