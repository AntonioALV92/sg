import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { SessionService } from 'src/app/services/session/session.service';

@Injectable({
  providedIn: 'root'
})
export class SessionGuardGuard implements CanActivate {

  constructor(private session: SessionService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    if (this.session.isLogged()) {
      if (this.session.getPerfil() === parseInt(route.data.expectedRole, 10)) {
        return true;
      } else {
        return false;
      }
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
