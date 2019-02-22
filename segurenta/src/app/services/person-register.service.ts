import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonRegisterService {

  constructor(private http: HttpClient) { }

  registerRenter(renter: any) {
    return this.http.post('https://reqres.in/api/login', {
      // tslint:disable-next-line:object-literal-shorthand
      renter: renter
    });
  }

  registerAdviser(adviser: any) {
    return this.http.post('https://reqres.in/api/login', {
      // tslint:disable-next-line:object-literal-shorthand
      adviser: adviser
    });
  }

  registerOwner(owner: any) {
    return this.http.post('https://reqres.in/api/login', {
      // tslint:disable-next-line:object-literal-shorthand
      owner: owner
    });
  }

}
