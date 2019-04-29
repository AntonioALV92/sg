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
  private headers = {
    'Content-Type': 'multipart/form-data',
    // 'Content-Type': 'application/json',
    'Accept-Charset': 'utf-8'
    // 'Authorization':
  };

  // tslint:disable-next-line:max-line-length
  constructor(private http: HttpClient, private middleware: MiddlewareService, private config: ConfigurationService, private session: SessionService) { }

  public getInfoUsuario() {
    const header = new HttpHeaders({'Content-Type': 'multipart/form-data','Accept-Charset':'utf-8'});
    return new Promise((resolve) => {
      this.http.get(this.config.endpoints.infoUsuario, { headers: header}).subscribe(
      // this.middleware.get(this.config.endpoints.infoUsuario, this.headers).subscribe(
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
    debugger;
    return new Promise((resolve) => {
      this.middleware.put(this.config.endpoints.editarUsuario, usuario, this.headers).subscribe(
        (res: any) => {
          debugger;
          return resolve(res.result);
        },
        (err: any) => {
          console.error(err.error);
        }
      );
    });
  }
}


