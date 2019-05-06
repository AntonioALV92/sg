import { Injectable } from '@angular/core';
import { MiddlewareService } from '../middleware/middleware.service';
import { ConfigurationService } from '../configuration/configuration.service';
import { SessionService } from '../session/session.service';
import { EstructuraResponse } from '../../shared/models/estructura-response.class';
import { InfoUsuarioClass } from '../../shared/models/info-usuario.class';
import { UsuarioClass } from '../../shared/interfaces/person.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // tslint:disable-next-line:max-line-length
  constructor(private http: HttpClient, private middleware: MiddlewareService, private config: ConfigurationService, private session: SessionService) { }

  public getInfoUsuario(tipoCuenta: number) {
    return new Promise((resolve) => {
    this.middleware.get(this.config.endpoints.infoUsuario + '/' + tipoCuenta).subscribe(
        (res: EstructuraResponse<InfoUsuarioClass>) => {
          return resolve(res.result);
        },
        (err: any) => {
          console.error(err.error);
        }
      );
    });
  }

  /**
   * editarUsuario
   */
  public editarUsuario(usuario: UsuarioClass) {
    return new Promise((resolve) => {
      this.middleware.put(this.config.endpoints.editarUsuario, usuario).subscribe(
        (res: any) => {
          return resolve(res.result);
        },
        (err: any) => {
          console.error(err.error);
        }
      );
    });
  }
}


