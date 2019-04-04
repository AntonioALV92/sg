import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  constructor(private http: HttpClient, private router: Router) { }

  login(userName: string, password: string) {
    if (userName === 'inquilino@email.com') {
      this.router.navigate(['home-rent']);
      this.loggedIn.next(true);
    } else if (userName === 'asesor@email.com') {
      this.router.navigate(['home-adviser']);
      this.loggedIn.next(true);
    }
    return this.http.post('https://reqres.in/api/login', {
      email: userName,
      // tslint:disable-next-line:object-literal-shorthand
      password: password,
    } );
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['home']);
  }

}
