import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PersonClass } from '../../interfaces/person.interface';
import { Router } from '@angular/router';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';

import { CatalogosService } from 'src/app/services/catalogos/catalogos.service';
import { FormRegisterRent, FormRegisterAdviser, GetNumber } from './helpers/form';
import { PdfViewerComponent } from 'src/app/shared/components/pdf-viewer/pdf-viewer.component';

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
  public fileNameDialogRef: MatDialogRef<PdfViewerComponent>;

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
    this.fileNameDialogRef = this.dialog.open(PdfViewerComponent);
  }

  public changeRegister(opt: number): void {
    this.isRenter = !this.isRenter;
    this.title = this.isRenter ? 'Rentar' : 'Publicar';
    this.registerForm = this.isRenter ? FormRegisterRent : FormRegisterAdviser;
    this.regist = new PersonClass();
  }

  public getErrorMessage(item: string): string {
    const num: {min: number, max: number} = GetNumber.minMax(item);
    return this.registerForm.get(item).hasError('required') ? 'Campo requerido' :
      this.registerForm.get(item).hasError('email') ? 'Formato de correo inválido' :
      this.registerForm.get(item).hasError('pattern') ? 'Formato inválido' :
      this.registerForm.get(item).hasError('minlength') ? 'Mínimo ' + num.min + ' caracteres' :
      this.registerForm.get(item).hasError('maxlength') ? 'Máximo ' + num.max + ' caracteres' :
      '';
  }

  public register() {
    event.preventDefault(); // Avoid default action for the submit button of the login form
    if (this.registerForm.valid) {
      console.log(this.regist);
      if (this.isRenter) {
        // send request registerRenter
      } else {
        // send request registerAdviser
      }
    }
  }
}
