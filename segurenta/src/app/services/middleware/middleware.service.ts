import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Operations } from './helpers/operations';

@Injectable()
export class MiddlewareService {

  // private url: string = environment.API_URL;
  // private controller = Operations;

  // constructor(private http: HttpClient) {}

  // post(endpoint: string, request: object, headers: object) {
  //   const header: HttpHeaders = this.controller.setHeaders(headers);
  //   return this.http.post(this.url + endpoint, request, {headers: header});
  // }

  // get(endpoint: string,  headers?: object) {
  //   const header: HttpHeaders = this.controller.setHeaders(headers);
  //   return this.http.get(this.url + endpoint, {headers: header});
  // }

  // put(endpoint: string, request: object, headers: object) {
  //   const header: HttpHeaders = this.controller.setHeaders(headers);
  //   return this.http.put(this.url + endpoint, request, {headers: header});
  // }

  // delete(endpoint: string,  headers?: object) {
  //   const header: HttpHeaders = this.controller.setHeaders(headers);
  //   return this.http.delete(this.url + endpoint, {headers: header});
  // }
}
