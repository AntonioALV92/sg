import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl} from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';

import { SessionService } from 'src/app/services/session/session.service';
import { getDialog } from '../../constants/modals-structure';
import { PasswordRecoveryComponent } from '../password-recovery/password-recovery.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm: FormGroup;
  public isHide: boolean;
  public errorLogin: string;
  public recoveryDialogRef: MatDialogRef<PasswordRecoveryComponent>;

  constructor(private session: SessionService, private dialogRef: MatDialog) {
    this.isHide = true;
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-ZñÑ0-9._@-]{0,}$'),
        Validators.minLength(3),
        Validators.maxLength(10)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10)
      ])
    });
  }
  public getErrorMessage(item: string): string {
    let num: { min: number, max: number };
    if (item === 'username') {
      num = { min: 3, max: 16 };
    } else {
      num = { min: 6, max: 10 };
    }
    return this.loginForm.get(item).hasError('required') ? 'Campo requerido' :
      this.loginForm.get(item).hasError('pattern') ? 'Formato inválido' :
      this.loginForm.get(item).hasError('minlength') ? 'Mínimo ' + num.min + ' caracteres' :
      this.loginForm.get(item).hasError('maxlength') ? 'Máximo ' + num.max + ' caracteres' :
      '';
  }

  private logIn() {
    if (this.loginForm.valid) {
      const request = {
        username: this.loginForm.get('username').value,
        password: this.loginForm.get('password').value,
      };
      this.session.login(request);
      this.dialogRef.closeAll();
    }
  }

  closeDialog() {
    this.dialogRef.closeAll();
  }

  openRecovery() {
    this.dialogRef.closeAll();
    const dialogConfig = getDialog;
    // dialogConfig.disableClose = true;
    // dialogConfig.width = '90%';
    dialogConfig.maxWidth = '100vw';
    this.recoveryDialogRef = this.dialogRef.open(PasswordRecoveryComponent, dialogConfig);
  }

}
