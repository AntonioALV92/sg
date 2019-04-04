import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { PasswordRecoveryComponent } from '../password-recovery/password-recovery.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  isInvalidLogin: boolean;
  isHide: boolean;

  recoveryDialogRef: MatDialogRef<PasswordRecoveryComponent>;


  constructor(private authService: AuthService, private router: Router, private dialogRef: MatDialog) {
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

  logIn() {
    event.preventDefault(); // Avoid default action for the submit button of the login form
    console.log(this.loginForm);
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email').value;
      const password = this.loginForm.get('password').value;
      // if (email === 'inquilino@email.com') {
      //   this.closeDialog();
      //   this.router.navigate(['home-rent']);
      // } else if (email === 'asesor@email.com') {
      //   this.closeDialog();
      //   this.router.navigate(['home-adviser']);
      // } else {
      //   alert('Credenciales inválidas');
      // }


      // Calls service to login user to the api rest
      this.authService.login(email, password).subscribe(
      res => {
       console.log(res);
       this.closeDialog();
      },
      error => {
        console.error(error);
        alert('Algo salió mal :(');
      });
    }


  }
  closeDialog() {
    this.dialogRef.closeAll();
  }
  navigate() {
    this.router.navigateByUrl('/home');
  }

  openReecovery() {
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.direction = 'ltr';
    // dialogConfig.width = '90%';
    dialogConfig.width = '100vw';
    dialogConfig.maxWidth = '95vw';
    dialogConfig.panelClass = 'dialog-width';

    dialogConfig.position = {
      top: '100px',
      left: '200px'
    };

    this.recoveryDialogRef = this.dialogRef.open(PasswordRecoveryComponent, dialogConfig);
  }

}
