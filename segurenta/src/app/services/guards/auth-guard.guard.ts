import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionService } from 'src/app/services/session/session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private session: SessionService, private router: Router) {}

  canActivate() {
    if (this.session.isLogged()) {
      switch (this.session.getPerfil()) {
        case 1:
          this.router.navigate(['/home-rent']);
          break;
        case 2:
          this.router.navigate(['/home-adviser']);
          break;
        case 3:
          this.router.navigate(['/home-rent']);
          break;
      }
      return false;
    } else {
      return true;
    }
  }
}
