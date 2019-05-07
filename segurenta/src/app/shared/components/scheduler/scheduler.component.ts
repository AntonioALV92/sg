import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { CalendarioService } from '../../../services/calendario/calendario.service';
@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./scheduler.component.css'],
})

export class SchedulerComponent implements OnInit {

  public viewDate: Date;
  public listDates: any;

  constructor(private service: CalendarioService) {}

  ngOnInit(): void {
    this.viewDate = new Date();
    this.getDates(this.viewDate.getMonth());
  }

  private async getDates(num: number) {
    this.listDates = await this.service.getDates(num);
  }
}
