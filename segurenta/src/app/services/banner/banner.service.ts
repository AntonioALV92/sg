import { Injectable } from '@angular/core';
import { MiddlewareService } from '../middleware/middleware.service';
import { ConfigurationService } from '../configuration/configuration.service';

@Injectable()
export class BannerService {

  constructor(
    private middleware: MiddlewareService,
    private config: ConfigurationService
  ) {}

  public getBanner(){
    return new Promise((resolve) => {
      this.middleware.get(this.config.endpoints.banner).subscribe(
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
