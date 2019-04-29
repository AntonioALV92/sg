import { Injectable } from '@angular/core';
import { MiddlewareService } from '../middleware/middleware.service';
import { ConfigurationService } from '../configuration/configuration.service';
// import { PersonClass, InquilinoClass } from 'src/app/shared/interfaces/person.interface';
// import { AlertsService } from '../alerts/alerts.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class CalendarioService {

  private headers = {
    'Content-Type': 'application/json',
    'Accept-Charset': 'utf-8'
  };

  constructor(
    private middleware: MiddlewareService,
    private config: ConfigurationService,
    // private alert: AlertsService
  ) { }

  // public getDates(mont: number) {
  //   return new Promise((resolve) => {
  //     const body = {
  //       mes: mont
  //     };
  //     this.middleware.post(this.config.endpoints.citasBroker, body).subscribe(
  //       (res: any) => {
  //         // this.alert.success('Inquilino creado!!');
  //       },
  //       (err: any) => {
  //         // this.alert.error('Error al crear inquilino');
  //         console.error(err);
  //       }
  //     );
  //   });
  // }

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
