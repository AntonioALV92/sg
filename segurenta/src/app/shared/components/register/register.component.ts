import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PersonClass } from '../../interfaces/person.interface';
import { Router } from '@angular/router';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';

import { CatalogosService } from 'src/app/services/catalogos/catalogos.service';
import { FormRegisterRent, FormRegisterAdviser } from './helpers/form';
// import { PdfViewerComponent } from '../pdf-viewer/pdf-viewer.component';
// import { PasswordRecoveryComponent } from '../password-recovery/password-recovery.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  public catBancos: any;
  public regist: PersonClass = new PersonClass();
  public title: string;
  public isRenter: boolean;
  public registerForm: FormGroup;

  // fileNameDialogRef: MatDialogRef<PdfViewerComponent>;

  constructor(private router: Router, private dialog: MatDialog, private catalog: CatalogosService) {
    this.isRenter = true;
    this.title = 'Rentar';
    this.registerForm = FormRegisterRent;
  }

  ngOnInit() {
    this.getBancos();
  }

  private async getBancos() {
    this.catBancos = await this.catalog.getBancos();
  }

  openViewer() {
    // this.fileNameDialogRef = this.dialog.open(PdfViewerComponent);
    // const dialogConfig = new MatDialogConfig();
    // this.dialog.open(DialogBodyComponent, dialogConfig);
  }

  public changeRegister(opt: number): void {
    this.isRenter = !this.isRenter;
    this.title = this.isRenter ? 'Rentar' : 'Publicar';
    this.registerForm = this.isRenter ? FormRegisterRent : FormRegisterAdviser;
    this.regist = new PersonClass();
  }

  public getErrorMessage(item: string): string {
    let min: number;
    let max: number;
    if (item.localeCompare('phoneNumber') === 0) {
      min = 10;
      max = 12;
    } else if (item.localeCompare('password') === 0) {
      min = 6;
      max = 10;
    } else if (item.localeCompare('clabe') === 0) {
      min = 16;
      max = 20;
    }
    return this.registerForm.get(item).hasError('required') ? 'Campo requerido' :
      this.registerForm.get(item).hasError('email') ? 'Formato de correo inválido' :
      this.registerForm.get(item).hasError('pattern') ? 'Formato inválido' :
      this.registerForm.get(item).hasError('minlength') ? 'Mínimo ' + min + ' caracteres' :
      this.registerForm.get(item).hasError('maxlength') ? 'Máximo ' + max + ' caracteres' :
      '';
  }

  public register(n?: number) {
    event.preventDefault(); // Avoid default action for the submit button of the login form
    if (this.registerForm.valid) {
      console.log(this.regist);
    }
  }
  // //   event.preventDefault();
  // //   console.log(this.registerForm);
  // //   if (this.registerForm.valid) {
  // //     const names = this.registerForm.get('names').value;
  // //     const firstLastName = this.registerForm.get('firstLastName').value;
  // //     const secondLastName = this.registerForm.get('secondLastName').value;
  // //     const phone = this.registerForm.get('phoneNumber').value;
  // //     const email = this.registerForm.get('email').value;
  // //     const password = this.registerForm.get('password').value;
  // //     console.log(this.renter);
  // //     this.router.navigate(['home-rent']);
  // //     this.dialog.closeAll();
  // //   }

  llenar1(): void {
    this.regist.names = 'Juan';
    this.regist.firstLastName = 'Perez';
    this.regist.secondLastName = 'Lopez';
    this.regist.phoneNumber = 5522138924;
    this.regist.email = 'correo@strat.net';
    this.regist.password = 'lalalala';
  }
  llenar2(): void {
    this.regist.names = 'Juan';
    this.regist.firstLastName = 'Perez';
    this.regist.secondLastName = 'Lopez';
    this.regist.phoneNumber = 5522138924;
    this.regist.email = 'correo@strat.net';
    this.regist.password = 'lalalala';
    this.regist.clabe = 1234567890123456;
  }
  // // }
  // registerU(n?: number) {
  //   if (n === 1) {
  //     this.router.navigate(['home-adviser']);
  //   }
  //   this.dialog.closeAll();
  // }

  // navigate() {
  //   this.router.navigate(['home-rent']);
  // }
}
