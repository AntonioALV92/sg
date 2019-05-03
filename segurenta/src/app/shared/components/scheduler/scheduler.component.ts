import { Component, ViewEncapsulation, OnInit } from '@angular/core';
// import FlatpickrEs from 'flatpickr/dist/l10n/es';
import { CalendarioService } from '../../../services/calendario/calendario.service';
@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./scheduler.component.css'],
})

export class SchedulerComponent implements OnInit {

  // declare const Flatpickr: any;
  // const Flatpickr: any;

  // Flatpickr.localize(FlatpickrLanguages.es);

  public viewDate: Date;
  public listDates: any;
  // public event: any;
  // public view: string;
  // public markDays: boolean;
  // public lan: any;

  constructor(private service: CalendarioService) {}

  ngOnInit(): void {
    this.viewDate = new Date();
    this.getDates(this.viewDate.getMonth());
  }

  private async getDates(num: number) {
    this.listDates = await this.service.getDates(num);
  }

  // constructor() {
    // this.Flatpickr.localize(require('assets/i10n/flatpickr.l10n.hr.js'));
    // console.log(FlatpickrEs);
    // this.lan = FlatpickrEs;
    // this.view = 'week';
    // this.markDays = false;
  //   flatpickr(myElem, {
  //     "locale": Russian // locale for this instance only
  // });
  // }

  // public setView(view: string) {
  //   if (this.view.localeCompare(view) !== 0) {
  //     this.view = view;
  //   }
  // }
}
