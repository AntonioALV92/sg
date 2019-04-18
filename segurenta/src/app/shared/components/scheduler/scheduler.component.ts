import { Component } from '@angular/core';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css'],
})

export class SchedulerComponent {

  public viewDate: Date = new Date();
  public view: string;

  constructor() {
    this.view = 'month';
  }

  public setView(view: string) {
    if (this.view.localeCompare(view) !== 0) {
      this.view = view;
    }
  }
}
