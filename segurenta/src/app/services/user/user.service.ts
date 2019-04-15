import { Injectable } from '@angular/core';
import { MiddlewareService } from '../middleware/middleware.service';
import { ConfigurationService } from '../configuration/configuration.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private middleware: MiddlewareService, private config: ConfigurationService) { }

  public getInfoUsuario() {
    return new Promise((resolve) => {
      this.middleware.get(this.config.endpoints.infoUsuario).subscribe(
        (res: any) => {
          return resolve(res);
        },
        (err: any) => {
          console.error(err);
        }
      );
    });
  }
}
