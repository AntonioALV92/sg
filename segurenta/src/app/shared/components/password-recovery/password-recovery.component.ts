import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.css']
})
export class PasswordRecoveryComponent {

  public recoveryForm: FormGroup;
  public errorSend: string;

  constructor() {
    this.recoveryForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern('[a-zA-ZñÑ0-9._-]+@(?:[a-zA-Z0-9_-]+.)+[a-zA-Z]{2,3}$')
      ])
    });
  }

  public getErrorMessage(item: string): string {
    return this.recoveryForm.get(item).hasError('required') ? 'Campo requerido' :
      this.recoveryForm.get(item).hasError('pattern') ? 'Formato del correo inválido' :
      '';
  }

  public send(): void {
    const email = this.recoveryForm.get('email').value;
    console.log(email);
  }

}
