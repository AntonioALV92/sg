import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  hide = true;

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)])
    });
  }

  getErrorMessage() {
    return this.loginForm.get('email').hasError('required') ? 'El correo es obligatorio' :
      this.loginForm.get('email').hasError('email') ? 'No es un correo válido' :
      this.loginForm.get('email').hasError('pattern') ? 'No es un correo válido' :
      '';
  }

  getErrorMessagePass() {
    return this.loginForm.get('password').hasError('required') ? 'La contraseña es obligatoria' :
      this.loginForm.get('password').hasError('minlength') ? 'Mínimo 6 caracteres' :
      this.loginForm.get('password').hasError('maxlength') ? 'Máximo 12 caracteres' :
       '';
  }

  logIn() {
    event.preventDefault(); // Avoid default action for the submit button of the login form
    console.log(this.loginForm);
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email').value;
      const password = this.loginForm.get('password').value;
      // Calls service to login user to the api rest
      this.authService.login(email, password).subscribe(

      res => {
       console.log(res);
       alert('Entraste!');
      },
      error => {
        console.error(error);
      },

      () => this.navigate()
    );
    }


  }

  navigate() {
    this.router.navigateByUrl('/home');
  }

}
