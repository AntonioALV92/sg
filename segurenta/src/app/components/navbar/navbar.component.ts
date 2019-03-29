import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { element } from 'protractor';
import { PersonInterface } from 'src/app/interfaces/person.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UpdateRenterComponent } from '../update-renter/update-renter.component';
import { Globals } from 'src/app/interfaces/catalog.interface';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { MiddlewareService } from 'src/app/services/middleware/middleware.service';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpRequest, HttpHeaders } from  "@angular/common/http";
import {HttpParams} from  "@angular/common/http";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  customersObservable : Observable<string>;

  renter: PersonInterface = {
    names: 'Daniela',
    firstLastName: 'Ortiz',
    secondLastName: 'Rodriguez',
    phoneNumber: '5555067209',
    email: 'daniela.ortiz@stratplus.com',
    nationality: 0,
  };
  registerForm: FormGroup;

  loginDialogRef: MatDialogRef<LoginComponent>;
  registerDialogRef: MatDialogRef<RegisterComponent>;
  updateDialogRef: MatDialogRef<UpdateRenterComponent>;

  isRenter: boolean;
  isBroker: boolean;

  isLoggedIn$: Observable<boolean>;


  constructor(private dialog: MatDialog, private authService: AuthService, private middleware: MiddlewareService, private  httpClient:HttpClient) {
    this.isRenter = true;
    this.isBroker = false;
    this.registerForm = new FormGroup({
      names: new FormControl('', [Validators.required]),
      firstLastName: new FormControl('', [Validators.required]),
      secondLastName: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(12)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)])
    });

  }
  openLogin() {
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

    this.loginDialogRef = this.dialog.open(LoginComponent, dialogConfig);
  }

  openRegister() {
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

    this.registerDialogRef = this.dialog.open(RegisterComponent, dialogConfig);
  }

  ngOnInit() {
    this.getDummy().subscribe(
      res => {
        console.log(res);
      },
      error  =>{
        console.log(error);
      }
    );
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  getDummy() {
    debugger;
    let request = {
      "propiedad": {
        "id": 0,
        "tipoPropiedad": 0,
        "nombre": "String",
        "precioRenta": 0.0,
        "mantenimiento": 0.0,
        "descripcion": "String",
        "paso": 1,
        "estatus": 0,
        "idCuenta": 0,
        "periodicidad": "dd-mm-yyyy",
        "ultimaModificacion": "dd-mm-yyyy",
        "fechaAlta": "dd-mm-yyyy",
        "imagenes": [
          {
            "dato": "file",
            "tipoImagen": 0
          }
        ],
        "direccionPropiedad": {
          "calle": "String",
          "numeroInterior": 0,
          "codigoPostal": 0,
          "colonia": "String",
          "ciudad": "String",
          "latitud": "19.001231023012",
          "longitud": "19.001231023012",
          "numeroExterior": 0,
          "observaciones": "String",
          "zona": "String",
          "delegacion": "String"
        },
        "caracteristicas": [
          {
            "idTipoCaracteristica": 0,
            "valor": ""
          }
        ],
        "disponibilidad": [
          {
            "fecha": "dd-mm-yyyy",
            "incio": "dd-mm-yyyy HH:mm:ss",
            "fin": "dd-mm-yyyy HH:mm:ss",
            "estatus": 0,
            "idCuenta": 0,
            "idAgente": 0
          }
        ]
      }
    };
    let h = {
      'Accept-Charset': 'utf-8',
      'Authorization': 'YWxhZGRpbjpvcGVuc2VzYW1l'
    };
    // let heade = new HttpHeaders();
    // heade.set('Accept-Charset', 'utf-8');
    // heade.set('Authorization', 'YWxhZGRpbjpvcGVuc2VzYW1l');
    let url : string = environment.API_URL;
    let text : string = '/api/sr/propiedades';
    console.log(url);
    return this.middleware.post(text, request, h);
    // return this.httpClient.post(url+text, request, {headers: heade});
    // return this.httpClient.post(url, {
    //   username: 'pabloFront',
    //   password: 'frontend',
    //   cuenta: 1
    // }, {headers: heade});
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

  openUpdateRenterData() {
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.direction = 'ltr';
    dialogConfig.width = '100vw';
    dialogConfig.maxWidth = '98vw';
    dialogConfig.panelClass = 'dialog-width';
    dialogConfig.position = {
      top: '100px',
      left: '200px'
    };



    this.updateDialogRef = this.dialog.open(UpdateRenterComponent, dialogConfig);
  }


}

