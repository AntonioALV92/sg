import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  constructor(private http: HttpClient, private router: Router) { }

  login(userName: string, password: string) {
    if (userName !== '' && password !== '' ) { // {3}
      this.loggedIn.next(true);
    }
    this.router.navigate(['home-adviser']);
    return this.http.post('https://reqres.in/api/login', {
      email: userName,
      // tslint:disable-next-line:object-literal-shorthand
      password: password,
    });
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['home']);
  }

}
