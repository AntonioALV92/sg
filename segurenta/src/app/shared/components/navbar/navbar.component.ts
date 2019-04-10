import { Component, OnInit} from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { Observable } from 'rxjs';

// Components
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

// Services
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loginDialogRef: MatDialogRef<LoginComponent>;
  public registerDialogRef: MatDialogRef<RegisterComponent>;
  // updateDialogRef: MatDialogRef<UpdateRenterComponent>;
  public isLoggedIn: Observable<boolean>;

  public dialogConfig = new MatDialogConfig();
  public datosUsuario: {};


  constructor(private dialog: MatDialog, private sessionService: SessionService) {
    this.dialogConfig = {
      autoFocus: true,
      direction: 'ltr',
      width: '100vw',
      maxWidth: '95vw',
      panelClass: 'dialog-width',
      position: {
        top: '100px',
        left: '200px'
      }
    };
  }

  ngOnInit() {
    this.isLoggedIn = this.sessionService.isLoggedIn;
    const data = JSON.parse(sessionStorage.getItem('jwtoken'));
    this.datosUsuario = data.result;
    console.log(this.datosUsuario);

  }

  openLogin() {
    this.dialogConfig.width = '100vw';
    this.loginDialogRef = this.dialog.open(LoginComponent, this.dialogConfig);
  }

  openRegister() {
    this.dialogConfig.width = '90vw';
    this.registerDialogRef = this.dialog.open(RegisterComponent, this.dialogConfig);
  }

  openUpdateRenterData() {
    // const dialogConfig = new MatDialogConfig();

    // // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    // dialogConfig.direction = 'ltr';
    // dialogConfig.width = '100vw';
    // dialogConfig.maxWidth = '98vw';
    // dialogConfig.panelClass = 'dialog-width';
    // dialogConfig.position = {
    //   top: '100px',
    //   left: '200px'
    // };



    // this.updateDialogRef = this.dialog.open(UpdateRenterComponent, dialogConfig);
  }


}

