import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonInterface } from '../../interfaces/person.interface';
import { Router } from '@angular/router';
import { MatDialogRef, MatDialog } from '@angular/material';
import { PdfViewerComponent } from '../pdf-viewer/pdf-viewer.component';
import { CatalogosService } from 'src/app/services/catalogos/catalogos.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  public catBancos = {};
  public banco;

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
    cardNumber: '',
    clabe: ''
  };

  owner: PersonInterface = {
    id: 0,
    names: '',
    firstLastName: '',
    secondLastName: '',
    phoneNumber: '',
    email: '',
    nationality: 0,
    bankName: '',
    clabe: ''
  };

  isRenter: boolean ;
  isAdviser: boolean;
  isOwner: boolean;
  title: string;
  registerForm: FormGroup;
  registerFormAdviser: FormGroup;
  registerFormOwner: FormGroup;

  fileNameDialogRef: MatDialogRef<PdfViewerComponent>;

  constructor(private router: Router, private dialog: MatDialog, private catalog: CatalogosService) {
    this.isRenter = true;
    this.title = 'Rentar';

    this.registerForm = new FormGroup({
      names: new FormControl('', [Validators.required]),
      firstLastName: new FormControl('', [Validators.required]),
      secondLastName: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(12)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)])
    });
    this.registerFormAdviser = new FormGroup({
      names: new FormControl('', [Validators.required]),
      firstLastName: new FormControl('', [Validators.required]),
      secondLastName: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(12)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
      bankName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]),
      // tslint:disable-next-line:max-line-length
      cardNumber: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern('[0-9]{16}$')]),
      // tslint:disable-next-line:max-line-length
      clabe: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(20), Validators.pattern('[0-9]{16,20}$')])
    });
    this.registerFormOwner = new FormGroup({
      nameComplete: new FormControl(''),
      phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(12)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
      num1: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]),
      num2: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]),
      num3: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]),
      num4: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]),
      num5: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]),
      num6: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(1)])
    });
  }

  ngOnInit() {
    this.getBancos();
  }

  private async getBancos() {
    this.catBancos = await this.catalog.getBancos();
    console.log(this.catBancos);
  }

  openViewer() {
    this.fileNameDialogRef = this.dialog.open(PdfViewerComponent);
    // const dialogConfig = new MatDialogConfig();
    // this.dialog.open(DialogBodyComponent, dialogConfig);
  }

  changeRegister(opt: number) {
    switch (opt) {
      case 1: {
          this.isRenter = true;
          this.isAdviser = false;
          this.isOwner = false;
          this.title = 'Rentar';
          break;
      }
      case 2: {
        this.isRenter = false;
        this.isAdviser = true;
        this.isOwner = false;
        this.title = 'Publicar';
        break;
      }
      case 3: {
        this.isRenter = false;
        this.isAdviser = false;
        this.isOwner = true;
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




  getErrorMessageNamesA() {
    return this.registerFormAdviser.get('names').hasError('required') ? 'Campo requerido' :
    '';
  }

  getErrorMessageFA() {
    return this.registerFormAdviser.get('firstLastName').hasError('required') ? 'Campo requerido' :
    '';
  }

  getErrorMessageSA() {
    return this.registerFormAdviser.get('secondLastName').hasError('required') ? 'Campo requerido' :
    '';
  }

  getErrorMessagePhoneA() {
    return this.registerFormAdviser.get('phoneNumber').hasError('required') ? 'Campo requerido' :
    '';
  }

  getErrorMessageEmailA() {
    return this.registerFormAdviser.get('email').hasError('required') ? 'Campo requerido' :
          this.registerFormAdviser.get('email').hasError('email') ? 'Formato inválido' :
          this.registerFormAdviser.get('email').hasError('pattern') ? 'Formato inválido' :
          '';
  }

  getErrorMessagePassA() {
    return this.registerFormAdviser.get('password').hasError('required') ? 'Campo requerido' :
          this.registerFormAdviser.get('password').hasError('minlength') ? 'Mínimo 6 caracteres' :
          this.registerFormAdviser.get('password').hasError('maxlength') ? 'Máximo 10 caracteres' :
          '';
  }

  getErrorMessageBank() {
    return this.registerFormAdviser.get('bankName').hasError('required') ? 'Campo requerido' :
          this.registerFormAdviser.get('bankName').hasError('minlength') ? 'Mínimo 2 caracteres' :
          this.registerFormAdviser.get('bankName').hasError('maxlength') ? 'Máximo 15 caracteres' :
          '';
  }

  getErrorMessageCard() {
    return this.registerFormAdviser.get('cardNumber').hasError('required') ? 'Campo requerido' :
          this.registerFormAdviser.get('cardNumber').hasError('minlength') ? '16 digitos' :
          this.registerFormAdviser.get('cardNumber').hasError('maxlength') ? '16 digitos' :
          this.registerFormAdviser.get('cardNumber').hasError('pattern') ? '16 digitos' :
          '';
  }
  getErrorMessageCLABE() {
    return this.registerFormAdviser.get('clabe').hasError('required') ? 'Campo requerido' :
          this.registerFormAdviser.get('clabe').hasError('minlength') ? 'Entre 16 y 20 digitos' :
          this.registerFormAdviser.get('clabe').hasError('maxlength') ? 'Entre 16 y 20 digitos' :
          this.registerFormAdviser.get('clabe').hasError('pattern') ? 'Entre 16 y 20 digitos' :
          '';
  }



  getErrorMessagePhoneO() {
    return this.registerFormOwner.get('phoneNumber').hasError('required') ? 'Campo requerido' :
    '';
  }

  getErrorMessageEmailO() {
    return this.registerFormOwner.get('email').hasError('required') ? 'Campo requerido' :
          this.registerFormOwner.get('email').hasError('email') ? 'Formato inválido' :
          this.registerFormOwner.get('email').hasError('pattern') ? 'Formato inválido' :
          '';
  }

  getErrorMessagePassO() {
    return this.registerFormOwner.get('password').hasError('required') ? 'Campo requerido' :
          this.registerFormOwner.get('password').hasError('minlength') ? 'Mínimo 6 caracteres' :
          this.registerFormOwner.get('password').hasError('maxlength') ? 'Máximo 10 caracteres' :
          '';
  }
  getErrorMessageNum() {
    return this.registerFormOwner.get('num1').hasError('required') ? 'Campo requerido' :
    '';
  }


  register(n?: number) {
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

      alert('Inquilino registrado!');
      this.router.navigate(['home-rent']);
      this.dialog.closeAll();
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
  registerU(n?: number) {
    if (n === 1) {
      alert('Asesor registrado!');
      this.router.navigate(['home-adviser']);
    } else if (n === 2 ) {
      alert('Propietario registrado!');
    }
    this.dialog.closeAll();
  }

  navigate() {
    this.router.navigate(['home-rent']);
  }
}
