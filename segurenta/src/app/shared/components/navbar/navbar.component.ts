import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { Router } from '@angular/router';


// Components
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { Controller } from './navbar.controller';

// Services
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public loginDialogRef: MatDialogRef<LoginComponent>;
  public registerDialogRef: MatDialogRef<RegisterComponent>;
  // public updateDialogRef: MatDialogRef<UpdateRenterComponent>;
  public isLoggedIn: boolean;

  public dialogConfig = new MatDialogConfig();
  public control = new Controller();
  public datosUsuario: any;

  constructor(private dialog: MatDialog, public sessionService: SessionService, private router: Router) {
    this.sessionService.loggedIn.subscribe(session => {
      this.isLoggedIn = session;
      if (this.isLoggedIn) {
        this.datosUsuario = this.sessionService.getDataUser();
        this.getNamePerfil();
      }
    });
    this.dialogConfig = this.control.getDialog();
  }

  private getNamePerfil() {
    const des = this.datosUsuario.perfiles.find(perfil => perfil.idPerfil === this.datosUsuario.tipoUsuarioDefault);
    this.datosUsuario.perfilName = des.descripcion;
  }

  private openLogin() {
    this.dialogConfig.width = '100vw';
    this.loginDialogRef = this.dialog.open(LoginComponent, this.dialogConfig);
  }

  private openRegister() {
    this.dialogConfig.width = '90vw';
    this.registerDialogRef = this.dialog.open(RegisterComponent, this.dialogConfig);
  }

  private openUpdateRenterData() {
    this.dialogConfig.disableClose = true;
    this.dialogConfig.width = '100vw';
    this.dialogConfig.maxWidth = '98vw';
    // this.updateDialogRef = this.dialog.open(UpdateRenterComponent, dialogConfig);
  }

  private changeProfile(perfil: number): void {
    this.sessionService.changeUserDefault(perfil);
    switch (perfil) {
      case 1:
        this.router.navigateByUrl('/home-rent');
        break;
      case 2:
        this.router.navigateByUrl('/home-adviser');
        break;
      case 3:
        this.router.navigateByUrl('/home-rent');
        break;
    }
  }
}
