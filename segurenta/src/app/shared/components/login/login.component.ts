import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { SessionService } from 'src/app/services/session/session.service';
import { LoginInterface } from 'src/app/shared/interfaces/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  isInvalidLogin: boolean;
  isHide: boolean;

  // public errorLogin: string = '';

  constructor(private session: SessionService, private router: Router, private dialogRef: MatDialog) {
    this.isInvalidLogin = false;
    this.isHide = true;
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,3}$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)])
    });
  }

  getErrorMessage() {
    return this.loginForm.get('email').hasError('required') ? 'Campo requerido' :
      this.loginForm.get('email').hasError('email') ? 'Formato inválido' :
      this.loginForm.get('email').hasError('pattern') ? 'Formato inválido' :
      '';
  }

  getErrorMessagePass() {
    return this.loginForm.get('password').hasError('required') ? 'Campo requerido' :
      this.loginForm.get('password').hasError('minlength') ? 'Mínimo 6 caracteres' :
      this.loginForm.get('password').hasError('maxlength') ? 'Máximo 10 caracteres' :
       '';
  }

  private logIn() {
    event.preventDefault();
    if (this.loginForm.valid) {
      const request = {
        username: this.loginForm.get('email').value,
        password: this.loginForm.get('password').value,
      };
      this.session.login(request);
      this.dialogRef.closeAll();
    }
  }

  closeDialog() {
    this.dialogRef.closeAll();
  }

  openRecovery() {
    // const dialogConfig = new MatDialogConfig();

    // // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    // dialogConfig.direction = 'ltr';
    // // dialogConfig.width = '90%';
    // dialogConfig.width = '100vw';
    // dialogConfig.maxWidth = '95vw';
    // dialogConfig.panelClass = 'dialog-width';

    // dialogConfig.position = {
    //   top: '100px',
    //   left: '200px'
    // };

    // this.recoveryDialogRef = this.dialogRef.open(PasswordRecoveryComponent, dialogConfig);
  }

}
