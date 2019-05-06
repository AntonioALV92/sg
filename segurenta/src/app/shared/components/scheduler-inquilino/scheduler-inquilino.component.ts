import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { CalendarioService } from '../../../services/calendario/calendario.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-scheduler-inquilino',
  templateUrl: './scheduler-inquilino.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./scheduler-inquilino.component.css'],
})

export class SchedulerInquilinoComponent implements OnInit {

  public viewDate: Date;
  public listDatesSub: Subscription;
  public listDates: any;
  public listDisponibilidad: any;

  constructor(private service: CalendarioService) {
    this.viewDate = new Date();
    this.service.subjectDatesBroker.subscribe(listDates => {
        this.listDates = listDates;
    });
  }

  ngOnInit(): void {
    this.service.getDatesBroker(this.viewDate.getMonth(), 1);
    // this.getDisponibilidadBroker(this.viewDate.getMonth());
  }

  // private getDatesBroker(num: number) {
    // return this.subject.asObservable();
    // this.listDates = this.service.getDatesBroker(num, 1);
  // }
  // private async getDatesBroker(num: number) {
  //   return this.subject.asObservable();
  //   this.listDates = await this.service.getDatesBroker(num, 1);
  // }

  // private async getDisponibilidadBroker(num: number) {
  //   this.listDisponibilidad = await this.service.getDisponibilidadBroker(num, 1);
  // }
}
