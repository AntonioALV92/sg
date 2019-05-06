import {
  Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, ViewChild, TemplateRef, Input,
  OnInit, OnChanges, SimpleChanges
} from '@angular/core';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView, CalendarMonthViewDay } from 'angular-calendar';
import { DayViewHour } from 'calendar-utils';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CalendarComponent implements OnChanges {

  @Input() view: string;
  @Input() newEvent: boolean;

  lol: any;

  public viewDate: Date = new Date();
  public refresh: Subject<any> = new Subject();
  public locale: string;
  public selectedDays: any = [];
  public selectedMonthViewDay: CalendarMonthViewDay;

  selectedDayViewDate: Date;

  dayView: DayViewHour[];

  events: CalendarEvent[] = [];


  constructor(private ref: ChangeDetectorRef) {
    this.locale = 'es-Mx';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.newEvent) {
      if (!changes.newEvent.currentValue) {
        this.cancelNewEvent();
      }
    }
  }

  dayClicked(day: CalendarMonthViewDay): void {
    if (isSameMonth(day.date, this.viewDate) && this.newEvent) {
      this.selectedMonthViewDay = day;
      const selectedDateTime = this.selectedMonthViewDay.date.getTime();
      const dateIndex = this.selectedDays.findIndex(
        (selectedDay: any) => selectedDay.date.getTime() === selectedDateTime
      );
      if (dateIndex > -1) {
        delete this.selectedMonthViewDay.cssClass;
        this.selectedDays.splice(dateIndex, 1);
      } else {
        this.selectedDays.push(this.selectedMonthViewDay);
        day.cssClass = 'cal-day-selected';
        this.selectedMonthViewDay = day;
      }
    }
    this.refresh.next(true);
  }

  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    body.forEach(day => {
      if (
        this.selectedDays.some(
          selectedDay => selectedDay.date.getTime() === day.date.getTime()
        )
      ) {
        day.cssClass = 'cal-day-selected';
      }
    });
    this.ref.detectChanges();
  }

  public cancelNewEvent() {
    this.selectedDays = [];
    this.refresh.next(true);
  }

  // hourSegmentClicked(date: Date) {
  //   this.selectedDayViewDate = date;
  //   this.addSelectedDayViewClass();
  // }

  // beforeDayViewRender(dayView: DayViewHour[]) {
  //   this.dayView = dayView;
  //   this.addSelectedDayViewClass();
  // }

  // private addSelectedDayViewClass() {
  //   this.dayView.forEach(hourSegment => {
  //     hourSegment.segments.forEach(segment => {
  //       delete segment.cssClass;
  //       if (
  //         this.selectedDayViewDate &&
  //         segment.date.getTime() === this.selectedDayViewDate.getTime()
  //       ) {
  //         segment.cssClass = 'cal-day-selected';
  //       }
  //     });
  //   });
  //   this.ref.detectChanges();
  // }
}
