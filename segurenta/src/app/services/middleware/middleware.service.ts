import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Operations } from './helpers/operations';

@Injectable()
export class MiddlewareService {

  private url: string = environment.API_URL;
  private controller = Operations;

  constructor(private http: HttpClient) {}

  post(endpoint: string, request: object, headers: object) {
    let header = this.controller.setHeaders(headers);
    return this.http.post(this.url+endpoint, request, {headers: header});
  }

  get(endpoint: string,  headers?: object) {
    let header = this.controller.setHeaders(headers);
    return this.http.get(this.url+endpoint, {headers: header});
  }

  put(endpoint: string, request: object, headers: object) {
    let header = this.controller.setHeaders(headers);
    return this.http.put(this.url+endpoint, request, {headers: header});
  }

  delete(endpoint: string,  headers?: object) {
    let header = this.controller.setHeaders(headers);
    return this.http.delete(this.url+endpoint, {headers: header});
  }

  // private handleError(error: any) {
  //   let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  //   return Observable.throw(errMsg);
  // }

}
