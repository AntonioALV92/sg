import { Component, OnInit } from '@angular/core';
import { PersonInterface } from 'src/app/interfaces/person.interface';
import { LoginComponent } from '../login/login.component';
import { MatDialogRef } from '@angular/material';
import { RegisterComponent } from '../register/register.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-renter',
  templateUrl: './update-renter.component.html',
  styleUrls: ['./update-renter.component.css']
})
export class UpdateRenterComponent implements OnInit {

  renter: PersonInterface = {
    names: 'Daniela',
    firstLastName: 'Ortiz',
    secondLastName: 'Rodriguez',
    phoneNumber: '5555067209',
    email: 'daniela.ortiz@stratplus.com',
    nationality: 0,
  };

  updateForm: FormGroup;
  loginDialogRef: MatDialogRef<LoginComponent>;
  registerDialogRef: MatDialogRef<RegisterComponent>;
  updateDialogRef: MatDialogRef<UpdateRenterComponent>;

  isLogged: boolean;
  isRenter: boolean;
  isBroker: boolean;

  constructor() {
    this.isLogged = true;
    this.isRenter = true;
    this.isBroker = false;
    this.updateForm = new FormGroup({
      names: new FormControl('', [Validators.required]),
      firstLastName: new FormControl('', [Validators.required]),
      secondLastName: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(12)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)])
    });
  }
  getErrorMessageNames() {
    return this.updateForm.get('names').hasError('required') ? 'Campo requerido' :
    '';
  }

  getErrorMessageF() {
    return this.updateForm.get('firstLastName').hasError('required') ? 'Campo requerido' :
    '';
  }

  getErrorMessageS() {
    return this.updateForm.get('secondLastName').hasError('required') ? 'Campo requerido' :
    '';
  }

  getErrorMessagePhone() {
    return this.updateForm.get('phoneNumber').hasError('required') ? 'Campo requerido' :
    '';
  }

  getErrorMessageEmail() {
    return this.updateForm.get('email').hasError('required') ? 'Campo requerido' :
          this.updateForm.get('email').hasError('email') ? 'Formato inválido' :
          this.updateForm.get('email').hasError('pattern') ? 'Formato inválido' :
          '';
  }

  getErrorMessagePass() {
    return this.updateForm.get('password').hasError('required') ? 'Campo requerido' :
          this.updateForm.get('password').hasError('minlength') ? 'Mínimo 6 caracteres' :
          this.updateForm.get('password').hasError('maxlength') ? 'Máximo 10 caracteres' :
          '';
  }

  ngOnInit() {
  }


}
