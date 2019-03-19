import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  isInvalidLogin: boolean;
  isHide: boolean;

  constructor(private authService: AuthService, private router: Router, private dialogRef: MatDialog) {
    this.isInvalidLogin = false;
    this.isHide = true;
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
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
      if (email === 'inquilino@email.com') {
        alert('Entraste!');
        this.router.navigate(['home-rent']);
      } else if (email === 'asesor@email.com') {
        alert('Entraste!');
        this.router.navigate(['home-adviser']);
      }

      // Calls service to login user to the api rest
    //   this.authService.login(email, password).subscribe(

    //   res => {
    //    console.log(res);
    //    alert('Entraste!');
    //   },
    //   error => {
    //     console.error(error);
    //     alert('Algo salió mal :(');
    //   },

    //   () => this.navigate()
    // );
    }


  }
  closeDialog() {
    this.dialogRef.closeAll();
  }
  navigate() {
    this.router.navigateByUrl('/home');
  }

}
