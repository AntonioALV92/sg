import { Injectable } from '@angular/core';
import { MiddlewareService } from '../middleware/middleware.service';
import { ConfigurationService } from '../configuration/configuration.service';
// import { AlertsService } from '../alerts/alerts.service';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
// import { EstructuraResponse } from '../../shared/models/estructura-response.class';

@Injectable()
export class CalendarioService {
  public subjectDatesBroker: BehaviorSubject<any>;
  public list: [];
  // public subject = new Subject;
  // public listDatesObs: any;

  constructor(
    private middleware: MiddlewareService,
    private config: ConfigurationService,
    // private alert: AlertsService
  ) {
    this.subjectDatesBroker = new BehaviorSubject<any>(this.list);
    // this.subjectDatesBroker.asObservable();
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

  public getDatesBroker(mont: number, idBroker: number) {
      const body = {
        mes: mont,
        id_broker: idBroker
      };
      this.middleware.post(this.config.endpoints.citasBroker2, body).subscribe(
        (res: any) => {
          this.subjectDatesBroker.next(res.result);
        },
        (err: any) => {
          console.error(err);
        }
      );
  }

  public getDisponibilidadBroker(mont: number, idBroker: number): any {
    return new Promise((resolve) => {
      const body = {
        mes: mont,
        id_broker: idBroker
      };
      this.middleware.post(this.config.endpoints.disponibilidadBroker, body).subscribe(
        (res: any) => {
          return resolve(res.result);
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

  public requestDate(req: { id_broker: number; idPropiedad: number; fecha_inicio: Date; fecha_fin: Date; estatus: number; }, mont: number) {
    // return new Promise((resolve) => {
      this.middleware.post(this.config.endpoints.solicitaCita, req).subscribe(
        (res: any) => {
          console.log(res);
          this.getDatesBroker(mont, req.id_broker);
          // return true;
          // return resolve(res.result);
        },
        (err: any) => {
          console.error(err);
          return true;
        }
      );
    // });
  }
}
