import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable()
export class AlertsService {

  constructor() { }

  public success(mesage?: string): void {
    Swal.fire({
      title: 'Operación Exitosa',
      text: mesage || '',
      type: 'success',
      showConfirmButton: false,
      timer: 1200
    });
  }

  public error(mesage?: string): void {
    Swal.fire({
      title: '¡Error!',
      text: mesage || '',
      type: 'error',
      confirmButtonText: 'Cerrar'
    });
  }

  public warning(mesage?: string): void {
    Swal.fire({
      text: mesage || '',
      type: 'warning',
      confirmButtonText: 'Ok'
    });
  }

  public info(mesage?: string): void {
    Swal.fire({
      text: mesage || '',
      type: 'info',
      confirmButtonText: 'Ok'
    });
  }

  public question(mesage?: string): void {
    Swal.fire({
      text: mesage || '',
      type: 'question',
      confirmButtonText: 'Ok'
    });
  }
}
