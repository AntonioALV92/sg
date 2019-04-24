import { Injectable } from '@angular/core';
import { MiddlewareService } from '../middleware/middleware.service';
import { ConfigurationService } from '../configuration/configuration.service';


@Injectable()
export class PropiedadService {


  constructor(
    private middleware: MiddlewareService,
    private config: ConfigurationService) { }

    public sendDireccion(direccion){
      return new Promise((resolve) => {
        this.middleware.post(this.config.endpoints.sendDireccion, direccion).subscribe(
          (res: any) => {
            return resolve(res);
          },
          (err: any) => {
            console.error(err);
          }
        );
      });
    }

    public sendPropiedad(propiedad){
      return new Promise((resolve) => {
        this.middleware.put(this.config.endpoints.sendPropiedad, propiedad).subscribe(
          (res: any) => {
            return resolve(res);
          },
          (err: any) => {
            console.error(err);
          }
        );
      });

    }

    public sendCaracteristicas(caracteristicas){
      return new Promise((resolve) => {
        this.middleware.put(this.config.endpoints.sendCaracteristicas, caracteristicas).subscribe(
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
