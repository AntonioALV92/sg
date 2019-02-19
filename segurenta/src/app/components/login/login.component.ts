import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide = true;

  constructor() {
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'El correo es obligatorio' :
        this.email.hasError('email') ? 'No es un correo válido' :
        '';
  }

  getErrorMessagePass() {
    return this.password.hasError('required') ? 'La contraseña es obligatoria' :
        this.password.hasError('minlength') ? 'Mínimo 6 caracteres' :
        this.password.hasError('maxlength') ? 'Máximo 12 caracteres' :
        '';
  }

  ngOnInit() {
  }

}
