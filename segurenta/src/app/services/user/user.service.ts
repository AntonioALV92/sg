import { Injectable } from '@angular/core';
import { MiddlewareService } from '../middleware/middleware.service';
import { ConfigurationService } from '../configuration/configuration.service';
import { SessionService } from '../session/session.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private token: string;
  private headers = {
    'Content-Type': 'application/json',
    'Accept-Charset': 'utf-8',
    'Authorization': this.token
  };

  constructor(private middleware: MiddlewareService, private config: ConfigurationService, private session: SessionService) { 
    this.token = 'Bearer ' + session.getToken();
  }

  public getInfoUsuario() {
    return new Promise((resolve) => {
      this.middleware.get(this.config.endpoints.infoUsuario, this.headers).subscribe(
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
