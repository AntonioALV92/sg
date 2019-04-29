import { Component, ViewEncapsulation } from '@angular/core';
// import Flatpickr from 'flatpickr';
// import flatpickr from 'flatpickr';
import FlatpickrEs from 'flatpickr/dist/l10n/es';
// import { Russian } from "flatpickr/dist/l10n/ru.js"

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./scheduler.component.css'],
})

export class SchedulerComponent {

  // declare const Flatpickr: any;
  // const Flatpickr: any;

  // Flatpickr.localize(FlatpickrLanguages.es);

  public viewDate: Date = new Date();
  public view: string;
  public markDays: boolean;
  public lan: any;

  constructor() {
    // this.Flatpickr.localize(require('assets/i10n/flatpickr.l10n.hr.js'));
    console.log(FlatpickrEs);
    this.lan = FlatpickrEs;
    this.view = 'week';
    this.markDays = false;
  //   flatpickr(myElem, {
  //     "locale": Russian // locale for this instance only
  // });
  }

  public setView(view: string) {
    if (this.view.localeCompare(view) !== 0) {
      this.view = view;
    }
  }
}
