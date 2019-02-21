import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonInterface } from '../../interfaces/person.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  renter: PersonInterface = {
    names: '',
    firstLastName: '',
    secondLastName: '',
    phoneNumber: '',
    email: '',
    nationality: 0,
  };

  adviser: PersonInterface = {
    names: '',
    firstLastName: '',
    secondLastName: '',
    phoneNumber: '',
    email: '',
    nationality: 0,
    bankName: '',
    clabe: ''
  };

  owner: PersonInterface = {
    names: '',
    firstLastName: '',
    secondLastName: '',
    phoneNumber: '',
    email: '',
    nationality: 0,
    bankName: '',
    clabe: ''
  };

  esPropietario: boolean;
  esPublicar: boolean;
  esRenta: boolean = true;
  title: string = 'Rentar';
  registerForm: FormGroup;
  hide: true;

  constructor(private router: Router) {
    this.registerForm = new FormGroup({
      names: new FormControl('', [Validators.required]),
      firstLastName: new FormControl('', [Validators.required]),
      secondLastName: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(12)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)])
    });
  }

  ngOnInit() {
  }

  changeRegister(opt: number) {
    switch (opt) {
      case 1: {
          this.esRenta = true;
          this.esPublicar = false;
          this.esPropietario = false;
          this.title = 'Rentar';
          break;
      }
      case 2: {
        this.esRenta = false;
        this.esPublicar = true;
        this.esPropietario = false;
        this.title = 'Publicar';
        break;
      }
      case 3: {
        this.esRenta = false;
        this.esPublicar = false;
        this.esPropietario = true;
        this.title = 'Propietario';
        break;
      }
      default: {
        break;
      }

    }
  }

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

  register() {
    event.preventDefault(); // Avoid default action for the submit button of the login form
    console.log(this.registerForm);
    if (this.registerForm.valid) {
      const names = this.registerForm.get('names').value;
      const firstLastName = this.registerForm.get('firstLastName').value;
      const secondLastName = this.registerForm.get('secondLastName').value;
      const phone = this.registerForm.get('phoneNumber').value;
      const email = this.registerForm.get('email').value;
      const password = this.registerForm.get('password').value;
      console.log(this.renter);
      alert('Registrado!');
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

  navigate() {
    this.router.navigateByUrl('/home');
  }
}
