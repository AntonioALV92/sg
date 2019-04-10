import { Injectable } from '@angular/core';
import { MiddlewareService } from '../middleware/middleware.service';
import { ConfigurationService } from '../configuration/configuration.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class SessionService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private middleware: MiddlewareService,
    private config: ConfigurationService,
    private router: Router
  ) {}

  public login(request) {
    const headers = {
      'Content-Type': 'application/json',
      'Accept-Charset': 'utf-8'
    };

    return new Promise(resolve => {
      this.middleware
        .post(this.config.endpoints.login, request, headers)
        .subscribe(
          (res: any) => {
            const data: string = JSON.stringify(res.result);
            sessionStorage.setItem('jwtoken', this.parseJwt(res.result.token));
            sessionStorage.setItem('jwdata', this.parseJwt(data));
            this.loggedIn.next(true);
            return resolve(res);
          },
          (err: any) => {
            console.error(err);
          }
        );
    });
  }

  public parseJwt(token: string) {
    // btoa
    return btoa(token);
  }

  public logout() {
    // this.middleware
    // .post(this.config.endpoints.logout, request, headers)
    // .subscribe(
    //   (res: any) => {
    //     return resolve(res);
    //   },
    //   (err: any) => {
    //     console.error(err);
    //   }
    // );
    delete sessionStorage.jwtoken;
    delete sessionStorage.jwdata;
    this.loggedIn.next(false);
    this.router.navigate(['home']);
  }

}
