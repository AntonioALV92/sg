import { Injectable } from '@angular/core';
import { MiddlewareService } from '../middleware/middleware.service';
import { ConfigurationService } from '../configuration/configuration.service';

@Injectable()
export class SessionService {
  constructor(
    private middleware: MiddlewareService,
    private config: ConfigurationService
  ) {}

  public login(request) {
    const headers = {
      'Content-Type': 'application/json',
      'Accept-Charset': 'utf-8'
    };

    return new Promise(resolve => {
      this.middleware
        .post(this.config.endpoints.login, request, headers)
        .subscribe(
          (res: any) => {
            const data: string = JSON.stringify(res);
            localStorage.setItem('jwtoken', data);
            return resolve(res);
          },
          (err: any) => {
            console.error(err);
          }
        );
    });
  }
}
