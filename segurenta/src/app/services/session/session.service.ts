import { Injectable } from '@angular/core';
import { MiddlewareService } from '../middleware/middleware.service';
import { ConfigurationService } from '../configuration/configuration.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { AlertsService } from '../alerts/alerts.service';
import { HttpResponse } from '@angular/common/http';

@Injectable()
export class SessionService {

  public loggedIn: BehaviorSubject<boolean>;

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

  public getToken() {
    return atob(sessionStorage.jwtoken);
  }

  public getPerfil() {
    const data = this.getDataUser();
    return data.tipoUsuarioDefault;
  }

  public parseJwt(token: string) {
    return btoa(token);
  }

  public getDataUser() {
    return JSON.parse(atob(sessionStorage.getItem('jwdata')));
  }

  public changeUserDefault(perfil: number) {
    const data = this.getDataUser();
    data.tipoUsuarioDefault = perfil;
    this.saveData(data);
    this.loggedIn.next(true);
  }

  public saveData(data: any) {
    sessionStorage.setItem('jwdata', this.parseJwt(JSON.stringify(data)));
  }

  public login(request: any) {
    const headers = {};
    //   'Content-Type': '*',
    //   'Accept-Charset': 'utf-8'
    // };

    this.middleware.postH(this.config.endpoints.login, request, headers)
    .subscribe((res: HttpResponse<any>) => {
      debugger;
      const token: string = res.headers.get('Authorization');
      sessionStorage.setItem('jwtoken', this.parseJwt(token));
      this.getCurrentUser();
    },
    (err: any) => {
      debugger;
      this.alert.error();
      console.error(err);
    });
  }

  public getCurrentUser() {
    this.middleware.get(this.config.endpoints.infoBasicUser).subscribe(
    (res: any) => {
      this.saveData(res.result);
      if (res.result.tipoUsuarioDefault === 1) {
        this.router.navigateByUrl('/home-rent');
      } else if (res.result.tipoUsuarioDefault === 2) {
        this.router.navigateByUrl('/home-adviser');
      } else if (res.result.tipoUsuarioDefault === 3) {
        this.router.navigateByUrl('/home-rent');
      } else {
        this.logout();
        this.alert.error();
      }
      this.loggedIn.next(true);
    },
    (err: any) => {
      this.alert.error();
      console.error(err);
    });
  }

  public logout() {
    const request = {
      menssage: 'OK',
      code: 200,
    };
    const headers = {
      'Content-Type': 'application/json',
      'Accept-Charset': 'utf-8'
    };
    this.middleware.post(this.config.endpoints.logout, request, headers)
    .subscribe((res: any) => {
      delete sessionStorage.jwtoken;
      delete sessionStorage.jwdata;
      this.loggedIn.next(false);
      this.router.navigate(['/home']);
    },
    (err: any) => {
      this.alert.error();
      console.error(err);
    });
  }
}
