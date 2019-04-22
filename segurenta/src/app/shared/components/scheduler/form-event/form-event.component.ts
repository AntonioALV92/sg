import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { FormRegisterDate } from './helpers/form';
import { DateClass } from 'src/app/shared/interfaces/date.interface';


import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.css']
})
export class FormEventComponent {

  public citaForm: FormGroup;
  public newCita: DateClass = new DateClass();

  constructor() {
    this.citaForm = FormRegisterDate;
  }


  public getErrorMessage(item: string): string {
    // const num: {min: number, max: number} = GetNumber.minMax(item);
    return this.citaForm.get(item).hasError('required') ? 'Campo requerido' :
      // this.eventForm.get(item).hasError('email') ? 'Formato de correo inválido' :
      // this.eventForm.get(item).hasError('pattern') ? 'Formato inválido' :
      // this.registerForm.get(item).hasError('minlength') ? 'Mínimo ' + num.min + ' caracteres' :
      // this.registerForm.get(item).hasError('maxlength') ? 'Máximo ' + num.max + ' caracteres' :
      '';
  }

  public registerCita(): void {
    console.log(this.newCita);
  }

}
