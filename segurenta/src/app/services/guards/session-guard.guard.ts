import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionService } from 'src/app/services/session/session.service';

@Injectable({
  providedIn: 'root'
})
export class SessionGuardGuard implements CanActivate {

  constructor(private session: SessionService, private router: Router) {}

  canActivate() {
    if (this.session.isLogged()) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }
}
