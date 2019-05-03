import { Injectable } from '@angular/core';
import { MiddlewareService } from '../middleware/middleware.service';
import { ConfigurationService } from '../configuration/configuration.service';
// import { AlertsService } from '../alerts/alerts.service';
import { HttpHeaders } from '@angular/common/http';
import { CalendarClass } from '../../shared/interfaces/calendar.interface';
import { BehaviorSubject, Subject } from 'rxjs';
// import { EstructuraResponse } from '../../shared/models/estructura-response.class';

@Injectable()
export class CalendarioService {

  // public listCalendar = new BehaviorSubject<any>(any);
  // public subject = new Subject();
  // public subject = new Subject;
  // public listDatesObs: any;

  constructor(
    private middleware: MiddlewareService,
    private config: ConfigurationService,
    // private alert: AlertsService
  ) {
    // this.listCalendar = new BehaviorSubject<any>(this.listDates);
    // this.listCalendar.asObservable();
    // this.subject.subscribe(value => this.listDatesObs = value);
  }

  public getDates(mont: number) {
    return new Promise((resolve) => {
      const body = {
        mes: mont
      };
      this.middleware.post(this.config.endpoints.citasBroker, body).subscribe(
        (res: any) => {
          return resolve(res.result);
          // this.subject.next(res.result);
        },
        (err: any) => {
          console.error(err);
        }
      );
    });
  }

  public updateDates(request: { id: number; estatus: number; }) {
    return new Promise((resolve) => {
      this.middleware.put(this.config.endpoints.citasBroker, request).subscribe(
        (res: any) => {
          return resolve(res.result === null ? true : false);
        },
        (err: any) => {
          console.error(err);
        }
      );
    });
  }

  // public signAdviser(person: PersonClass) {
  //   // return new Promise((resolve) => {
  //     this.middleware.post(this.config.endpoints.crearUsuario, person, this.headers).subscribe(
  //       (res: any) => {
  //         this.alert.success('Asesor creado!!');
  //         // return resolve(res);
  //       },
  //       (err: any) => {
  //         this.alert.error('Error al crear asesor');
  //         console.error(err);
  //       }
  //     );
  //   // });
  // }
}
