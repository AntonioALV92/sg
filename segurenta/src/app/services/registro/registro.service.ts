import { Injectable } from '@angular/core';
import { MiddlewareService } from '../middleware/middleware.service';
import { ConfigurationService } from '../configuration/configuration.service';
import { PersonClass, InquilinoClass } from 'src/app/shared/interfaces/person.interface';
import { AlertsService } from '../alerts/alerts.service';

@Injectable()
export class RegistroService {

  private headers = {
    'Content-Type': 'application/json',
    'Accept-Charset': 'utf-8'
  };

  constructor(
    private middleware: MiddlewareService,
    private config: ConfigurationService,
    private alert: AlertsService
  ) { }

  public signRent(inquilino: InquilinoClass) {
    this.middleware.post(this.config.endpoints.crearUsuario, inquilino, this.headers).subscribe(
      (res: any) => {
        this.alert.success('Inquilino creado!!');
        // return resolve(res);
      },
      (err: any) => {
        this.alert.error('Error al crear inquilino');
        console.error(err);
      }
    );
  }

  public signAdviser(person: PersonClass) {
    // return new Promise((resolve) => {
      this.middleware.post(this.config.endpoints.crearUsuario, person, this.headers).subscribe(
        (res: any) => {
          this.alert.success('Asesor creado!!');
          // return resolve(res);
        },
        (err: any) => {
          this.alert.error('Error al crear asesor');
          console.error(err);
        }
      );
    // });
  }
}
