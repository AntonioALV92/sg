import { Injectable } from '@angular/core';
import { MiddlewareService } from '../middleware/middleware.service'
import { ConfigurationService } from '../configuration/configuration.service'
import { error } from '@angular/compiler/src/util';

@Injectable()
export class CatalogosService {

  constructor(private middleware: MiddlewareService, private config: ConfigurationService) { }

  public getBancos() {
    return new Promise((resolve) => {
      this.middleware.get(this.config.endpoints.getBancos).subscribe((res: any) => {
        return resolve(res);
        // let response = JSON.parse(JSON.stringify(data));
        // if (response.codE === 0) {
        //     return resolve(response);
        // } else {
        //     /*Notifications*/
        //     return resolve(response);
        // }
    });
})
    // let result =  await this.middleware.get(this.config.endpoints.getBancos).toPromise()
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
