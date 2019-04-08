import { Component, OnInit} from '@angular/core';

import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';

// Components
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { Observable } from 'rxjs';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public loginDialogRef: MatDialogRef<LoginComponent>;
  public registerDialogRef: MatDialogRef<RegisterComponent>;
  // updateDialogRef: MatDialogRef<UpdateRenterComponent>;

  // isRenter: boolean;
  // isBroker: boolean;

  isLoggedIn: Observable<boolean>;


  constructor(private dialog: MatDialog, private sessionService: SessionService) {
    // this.isRenter = true;
    // this.isBroker = false;
    // this.registerForm = new FormGroup({
    //   names: new FormControl('', [Validators.required]),
    //   firstLastName: new FormControl('', [Validators.required]),
    //   secondLastName: new FormControl('', [Validators.required]),
    //   phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(12)]),
    //   email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
    //   password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)])
    // });

  }

  ngOnInit() {
    this.isLoggedIn = this.sessionService.isLoggedIn;
  }

  openLogin() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.direction = 'ltr';
    dialogConfig.width = '100vw';
    dialogConfig.maxWidth = '95vw';
    dialogConfig.panelClass = 'dialog-width';

    dialogConfig.position = {
      top: '100px',
      left: '200px'
    };

    this.loginDialogRef = this.dialog.open(LoginComponent, dialogConfig);
  }

  openRegister() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.direction = 'ltr';
    dialogConfig.width = '90vw';
    dialogConfig.maxWidth = '95vw';
    dialogConfig.panelClass = 'dialog-width';

    dialogConfig.position = {
      top: '100px',
      left: '200px'
    };

    this.registerDialogRef = this.dialog.open(RegisterComponent, dialogConfig);
  }

  // openRegister() {
  //   const dialogConfig = new MatDialogConfig();

  //   // dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.direction = 'ltr';
  //   // dialogConfig.width = '90%';
  //   dialogConfig.width = '100vw';
  //   dialogConfig.maxWidth = '95vw';
  //   dialogConfig.panelClass = 'dialog-width';

  //   dialogConfig.position = {
  //     top: '100px',
  //     left: '200px'
  //   };

  //   this.registerDialogRef = this.dialog.open(RegisterComponent, dialogConfig);
  // }

/*
  getErrorMessageNames() {
    return this.registerForm.get('names').hasError('required') ? 'Campo requerido' :
    '';
  }

  getErrorMessageF() {
    return this.registerForm.get('firstLastName').hasError('required') ? 'Campo requerido' :
    '';
  }

  getErrorMessageS() {
    return this.registerForm.get('secondLastName').hasError('required') ? 'Campo requerido' :
    '';
  }

  getErrorMessagePhone() {
    return this.registerForm.get('phoneNumber').hasError('required') ? 'Campo requerido' :
    '';
  }

  getErrorMessageEmail() {
    return this.registerForm.get('email').hasError('required') ? 'Campo requerido' :
          this.registerForm.get('email').hasError('email') ? 'Formato inválido' :
          this.registerForm.get('email').hasError('pattern') ? 'Formato inválido' :
          '';
  }

  getErrorMessagePass() {
    return this.registerForm.get('password').hasError('required') ? 'Campo requerido' :
          this.registerForm.get('password').hasError('minlength') ? 'Mínimo 6 caracteres' :
          this.registerForm.get('password').hasError('maxlength') ? 'Máximo 10 caracteres' :
          '';
  }
  */

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

