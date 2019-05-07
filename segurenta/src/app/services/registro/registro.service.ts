import { Injectable } from '@angular/core';
import { MiddlewareService } from '../middleware/middleware.service';
import { ConfigurationService } from '../configuration/configuration.service';
import { PersonClass, InquilinoClass } from 'src/app/shared/interfaces/person.interface';
import { AlertsService } from '../alerts/alerts.service';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/shared/components/login/login.component';
import { SessionService } from '../session/session.service';

@Injectable()
export class RegistroService {

  private headers = {
    'Content-Type': 'application/json',
    'Accept-Charset': 'utf-8'
  };

  constructor(
    private middleware: MiddlewareService,
    private config: ConfigurationService,
    private alert: AlertsService,
    private session: SessionService
  ) { }

  private logIn(user: string, pass: string) {
    if (user !== null && pass !== null) {
      const request = {
        username: user,
        password: pass,
      };
      this.session.login(request);
    }
  }

  public signRent(inquilino: InquilinoClass) {
    this.middleware.post(this.config.endpoints.crearUsuario, inquilino, this.headers).subscribe(
      (res: any) => {
        this.alert.success('Inquilino creado!!');
        this.logIn(inquilino.email, inquilino.password);
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
          this.logIn(person.email, person.password);
          // return resolve(res);
        },
        (err: any) => {
          this.alert.error('Error al crear asesor');
          console.error(err);
        }
      );
    // });
  }

  public recoveryPassword(email: string) {
    const req = {
      correo: email
    };
    this.middleware.post(this.config.endpoints.recoveryPass, req, this.headers).subscribe(
      (res: any) => {
        this.alert.success('Peticion Exitosa');
        // return resolve(res);
      },
      (err: any) => {
        this.alert.error(err.mensaje);
        console.error(err);
      }
    );
  }
}
