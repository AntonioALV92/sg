import { Injectable } from '@angular/core';
import { MiddlewareService } from '../middleware/middleware.service';
import { ConfigurationService } from '../configuration/configuration.service';
import { AlertsService } from '../alerts/alerts.service';

@Injectable()
export class CatalogosService {

  constructor(private middleware: MiddlewareService, private config: ConfigurationService, private alert: AlertsService) { }

  public getBancos() {
    return new Promise((resolve) => {
      this.middleware.get(this.config.endpoints.catBancos).subscribe(
        (res: any) => {
          return resolve(res);
        },
        (err: any) => {
          console.error(err);
        }
      );
    });
  }

  public getNacionalidades() {
    return new Promise((resolve) => {
      this.middleware.get(this.config.endpoints.catNacionalidades).subscribe(
        (res: any) => {
          return resolve(res);
        },
        (err: any) => {
          console.error(err);
        }
      );
    });
  }

  public getTipoPropiedades() {
    return new Promise((resolve) => {
      this.middleware.get(this.config.endpoints.catTipoPropiedades).subscribe(
        (res: any) => {
          return resolve(res);
        },
        (err: any) => {
          console.error(err);
        }
      );
    });
  }

  public getCaracteristicas() {
    return new Promise((resolve) => {
      this.middleware.get(this.config.endpoints.catCategorias).subscribe(
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
