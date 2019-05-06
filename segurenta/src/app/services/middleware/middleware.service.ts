import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class MiddlewareService {

  private url: string = environment.API_URL;

  constructor(private http: HttpClient) {}

  private headers(headers?: any) {
    if (sessionStorage.jwtoken) {
      if (!headers) {
        headers = {};
      }
      headers = Object.assign(headers, { Authorization: atob(sessionStorage.jwtoken) });
    }
    return headers;
  }

  post(endpoint: string, request: object, head?: any) {
    const headersData = this.headers(head);
    let header: HttpHeaders;
    if (headersData) {
      header = new HttpHeaders(headersData);
    } else {
      header = new HttpHeaders();
    }
    return this.http.post(this.url + endpoint, request, {headers: header});
  }

  postH(endpoint: string, request: object, head: object) {
    const headersData = this.headers(head);
    let header: HttpHeaders;
    if (headersData) {
      header = new HttpHeaders(headersData);
    } else {
      header = new HttpHeaders();
    }
    return this.http.post(this.url + endpoint, request, {headers: header, observe: 'response'});
  }

  get(endpoint: string, head?: object) {
    const headersData = this.headers(head);
    let header: HttpHeaders;
    if (headersData) {
      header = new HttpHeaders(headersData);
    } else {
      header = new HttpHeaders();
    }
    return this.http.get(this.url + endpoint, {headers: header});
  }

  put(endpoint: string, request: object, head?: object) {
    const headersData = this.headers(head);
    let header: HttpHeaders;
    if (headersData) {

      console.log(headersData)
      header = new HttpHeaders(headersData);
    } else {
      header = new HttpHeaders();
    }
    return this.http.put(this.url + endpoint, request, {headers: header});
  }

  delete(endpoint: string, head?: object) {
    const headersData = this.headers(head);
    let header: HttpHeaders;
    if (headersData) {
      header = new HttpHeaders(headersData);
    } else {
      header = new HttpHeaders();
    }
    return this.http.delete(this.url + endpoint, {headers: header});
  }
}
