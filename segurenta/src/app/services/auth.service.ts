import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(userName: string, password: string) {
    this.router.navigate(['home-adviser']);
    return this.http.post('https://reqres.in/api/login', {
      email: userName,
      // tslint:disable-next-line:object-literal-shorthand
      password: password,
    }, );
  }

  logout() {
    this.router.navigate(['home']);
  }

}
