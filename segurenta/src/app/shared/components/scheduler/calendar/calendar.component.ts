import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef, Input, OnInit, OnChanges,
  SimpleChanges, ViewEncapsulation } from '@angular/core';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { CalendarEvent, CalendarMonthViewDay, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


// import {
//   Component,
//   ChangeDetectionStrategy,
//   ViewEncapsulation
// } from '@angular/core';
import { DayViewHour } from 'calendar-utils';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-calendar',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './calendar.component.html',
  // styleUrls: ['./calendar.component.css'],
  styles: [
    `
      .cal-day-selected,
      .cal-day-selected:hover {
        background-color: deeppink !important;
      }
    `
  ]
})
export class CalendarComponent implements OnInit, OnChanges {

  @Input() viewFormat: string;

  public locale: string;
  // public view: CalendarView = CalendarView.Month;
  public view: string;
  public viewDate: Date = new Date();
  public refresh: Subject<any> = new Subject();
  CalendarView = CalendarView;

  constructor(private modal: NgbModal) {
    this.locale = 'es-Mx';
    this.view = 'month';
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.viewFormat) {
      if (!changes.viewFormat.firstChange) {
        this.viewFormat = changes.viewFormat.currentValue;
        this.setView(this.viewFormat);
      }
    }
  }

  private setView(view: string) {
    switch (view) {
      case 'month':
        this.view = 'month';
        // this.view = CalendarView.Month;
        break;
      case 'week':
        this.view = 'week';
        // this.view = CalendarView.Week;
        break;
      case 'day':
        this.view = 'day';
        // this.view = CalendarView.Day;
        break;
    }
  }

  // @ViewChild('modalContent') modalContent: TemplateRef<any>;

  // view: CalendarView = CalendarView.Month;


  // viewDate: Date = new Date();

  // modalData: {
  //   action: string;
  //   event: CalendarEvent;
  // };

  // actions: CalendarEventAction[] = [
  //   {
  //     label: '<i class="fa fa-fw fa-pencil"></i>',
  //     onClick: ({ event }: { event: CalendarEvent }): void => {
  //       this.handleEvent('Edited', event);
  //     }
  //   },
  //   {
  //     label: '<i class="fa fa-fw fa-times"></i>',
  //     onClick: ({ event }: { event: CalendarEvent }): void => {
  //       this.events = this.events.filter(iEvent => iEvent !== event);
  //       this.handleEvent('Deleted', event);
  //     }
  //   }
  // ];

  // refresh: Subject<any> = new Subject();

  // events: CalendarEvent[] = [
  //   {
  //     start: subDays(startOfDay(new Date()), 1),
  //     end: addDays(new Date(), 1),
  //     title: 'A 3 day event',
  //     color: colors.red,
  //     actions: this.actions,
  //     allDay: true,
  //     resizable: {
  //       beforeStart: true,
  //       afterEnd: true
  //     },
  //     draggable: true
  //   },
  //   {
  //     start: startOfDay(new Date()),
  //     title: 'An event with no end date',
  //     color: colors.yellow,
  //     actions: this.actions
  //   },
  //   {
  //     start: subDays(endOfMonth(new Date()), 3),
  //     end: addDays(endOfMonth(new Date()), 3),
  //     title: 'A long event that spans 2 months',
  //     color: colors.blue,
  //     allDay: true
  //   },
  //   {
  //     start: addHours(startOfDay(new Date()), 2),
  //     end: new Date(),
  //     title: 'A draggable and resizable event',
  //     color: colors.yellow,
  //     actions: this.actions,
  //     resizable: {
  //       beforeStart: true,
  //       afterEnd: true
  //     },
  //     draggable: true
  //   }
  // ];

  // activeDayIsOpen: boolean = true;

  // // dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
  // //   debugger;
  // //   if (isSameMonth(date, this.viewDate)) {
  // //     this.viewDate = date;
  // //     console.log(this.viewDate);
      // console.log(this.viewDate.format('DD-MM-YYYY'));
    //   if (
    //     (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
    //     events.length === 0
    //   ) {
    //     this.activeDayIsOpen = false;
    //   } else {
    //     this.activeDayIsOpen = true;
    //   }
  // //   }
  // // }
  selectedMonthViewDay: CalendarMonthViewDay;

  selectedDayViewDate: Date;

  events: CalendarEvent[] = [];

  selectedDays: any = [];

  dayView: DayViewHour[];

  // refresh: Subject<any> = new Subject();

  dayClicked(day: CalendarMonthViewDay): void {
  // dayClicked(day, events: { date: Date; events: CalendarEvent[] }): void {
    debugger;
    this.selectedMonthViewDay = day;
    const selectedDateTime = this.selectedMonthViewDay.date.getTime();
    const dateIndex = this.selectedDays.findIndex(
      selectedDay => selectedDay.date.getTime() === selectedDateTime
    );
    if (dateIndex > -1) {
      delete this.selectedMonthViewDay.cssClass;
      this.selectedDays.splice(dateIndex, 1);
    } else {
      this.selectedDays.push(this.selectedMonthViewDay);
      day.cssClass = 'cal-day-selected';
      this.selectedMonthViewDay = day;
    }
    console.log(this.selectedDays);
    this.refreshView();
    // this.beforeMonthViewRender();
    // this.refresh.next();
    // event.preventDefault();
  }

  refreshView(): void {
    debugger;
    this.refresh.next();
  }

  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    // debugger
    body.forEach(day => {
      if (
        this.selectedDays.some(
          selectedDay => selectedDay.date.getTime() === day.date.getTime()
        )
      ) {
        day.cssClass = 'cal-day-selected';
      }
    });
  }

  hourSegmentClicked(date: Date) {
    debugger
    this.selectedDayViewDate = date;
    this.addSelectedDayViewClass();
  }

  beforeDayViewRender(dayView: DayViewHour[]) {
    debugger
    this.dayView = dayView;
    this.addSelectedDayViewClass();
  }

  private addSelectedDayViewClass() {
    debugger
    this.dayView.forEach(hourSegment => {
      hourSegment.segments.forEach(segment => {
        delete segment.cssClass;
        if (
          this.selectedDayViewDate &&
          segment.date.getTime() === this.selectedDayViewDate.getTime()
        ) {
          segment.cssClass = 'cal-day-selected';
        }
      });
    });
  }

















  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    debugger;
    // this.events = this.events.map(iEvent => {
    //   if (iEvent === event) {
    //     return {
    //       ...event,
    //       start: newStart,
    //       end: newEnd
    //     };
    //   }
    //   return iEvent;
    // });
    // this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    debugger;
    // this.modalData = { event, action };
    // this.modal.open(this.modalContent, { size: 'lg' });
  }

  // addEvent(): void {
  //   this.events = [
  //     ...this.events,
  //     {
  //       title: 'New event',
  //       start: startOfDay(new Date()),
  //       end: endOfDay(new Date()),
  //       color: colors.red,
  //       draggable: true,
  //       resizable: {
  //         beforeStart: true,
  //         afterEnd: true
  //       }
  //     }
  //   ];
  // }

  // deleteEvent(eventToDelete: CalendarEvent) {
  //   this.events = this.events.filter(event => event !== eventToDelete);
  // }
  // closeOpenMonthViewDay() {
  //   this.activeDayIsOpen = false;
  // }
}
