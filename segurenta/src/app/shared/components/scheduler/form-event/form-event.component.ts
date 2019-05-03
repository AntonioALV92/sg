import { Component, OnInit, Input } from '@angular/core';
import { CalendarioService } from 'src/app/services/calendario/calendario.service';
import { DatesFilterPipe } from '../../../pipes/dates-filter.pipe';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.css']
})

export class FormEventComponent implements OnInit {

  @Input() public listDates: any;

  constructor(private service: CalendarioService) {}

  ngOnInit(): void {}

  private updateDate(ids: number, state: number) {
    const request = {
      id: ids,
      estatus: state
    };
    this.service.updateDates(request);
  }
}
