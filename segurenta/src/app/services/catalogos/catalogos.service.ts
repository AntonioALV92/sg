import { Injectable } from '@angular/core';
import { MiddlewareService } from '../middleware/middleware.service'
import { ConfigurationService } from '../configuration/configuration.service'

@Injectable()
export class CatalogosService {

  constructor(private middleware: MiddlewareService, private config: ConfigurationService) { }

  async getBancos() {
    let result =  await this.middleware.get(this.config.endpoints.getBancos).toPromise();
    // .then(res => {
    //   return res;
    // })
    // .catch (error => {
    //   console.error(error);
    // })
    // .subscribe(
    //   res => {
    //     debugger;
    //     return res;
    //   },
    //   error  =>{
    //     console.log(error);
    //   }
    // );
  }
}
