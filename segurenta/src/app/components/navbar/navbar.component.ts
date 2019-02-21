import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loginDialogRef: MatDialogRef<LoginComponent>;
  registerDialogRef: MatDialogRef<RegisterComponent>;

  constructor(private dialog: MatDialog) { }
  openLogin() {
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.direction = 'ltr';
    dialogConfig.width = '90%';

    dialogConfig.position = {
      top: '150px',
      left: '300px'
    };

    this.loginDialogRef = this.dialog.open(LoginComponent, dialogConfig);
  }

  openRegister() {
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.direction = 'ltr';
    dialogConfig.width = '90%';

    dialogConfig.position = {
      top: '150px',
      left: '300px'
    };

    this.registerDialogRef = this.dialog.open(RegisterComponent, dialogConfig);
  }

  ngOnInit() {
  }

}

