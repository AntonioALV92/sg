import { Injectable } from '@angular/core';
import { MiddlewareService } from '../middleware/middleware.service';
import { ConfigurationService } from '../configuration/configuration.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AlertsService } from '../alerts/alerts.service';

@Injectable()
export class SessionService {

  public loggedIn: BehaviorSubject<boolean>;

  // private loggedIn = new BehaviorSubject<boolean>(false);
  // get isLoggedIn() {
  //   return this.loggedIn.asObservable();
  // }

  constructor(
    private middleware: MiddlewareService,
    private config: ConfigurationService,
    private router: Router,
    private alert: AlertsService
  ) {
    this.loggedIn = new BehaviorSubject<boolean>(sessionStorage.jwtoken ? true : false);
    this.loggedIn.asObservable();
  }

  public isLogged() {
    return (sessionStorage.jwtoken ? true : false);
  }

  public login(request: any) {
    const headers = {
      'Content-Type': 'application/json',
      'Accept-Charset': 'utf-8'
    };

    this.middleware.post(this.config.endpoints.login, request, headers)
    .subscribe(
      (res: any) => {
        const data: string = JSON.stringify(res.result);
        sessionStorage.setItem('jwtoken', this.parseJwt(res.result.token));
        sessionStorage.setItem('jwdata', this.parseJwt(data));
        if (res.result.tipousuarioDefault === 1) {
          this.router.navigateByUrl('/home-rent');
        } else if (res.result.tipousuarioDefault === 2) {
          this.router.navigateByUrl('/home-adviser');
        } else if (res.result.tipousuarioDefault === 3) {
          this.router.navigateByUrl('/home-rent');
        } else {
          this.alert.error();
        }
        this.loggedIn.next(true);
      },
      (err: any) => {
        this.alert.error();
        console.error(err);
      }
    );
  }

  public parseJwt(token: string) {
    return btoa(token);
  }

  public logout() {
    delete sessionStorage.jwtoken;
    delete sessionStorage.jwdata;
    this.loggedIn.next(false);
    this.router.navigate(['/home']);
  }

}
