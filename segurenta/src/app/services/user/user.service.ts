import { Injectable } from '@angular/core';
import { MiddlewareService } from '../middleware/middleware.service';
import { ConfigurationService } from '../configuration/configuration.service';
import { SessionService } from '../session/session.service';
import { EstructuraResponse } from '../../shared/models/estructura-response.class';
import { InfoUsuarioClass } from '../../shared/models/info-usuario.class';
import { UsuarioClass } from '../../shared/interfaces/person.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private headers = {
    'Content-Type': 'application/json',
    'Accept-Charset': 'utf-8'
    // 'Authorization':
  };

  constructor(private middleware: MiddlewareService, private config: ConfigurationService, private session: SessionService) { }

  public getInfoUsuario() {
    return new Promise((resolve) => {
      this.middleware.get(this.config.endpoints.infoUsuario, this.headers).subscribe(
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


