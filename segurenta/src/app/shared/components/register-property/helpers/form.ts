import { FormGroup, FormControl, Validators } from '@angular/forms';

export const FormAddress = new FormGroup({
    alias: new FormControl('', [
      
    ]),
    calle: new FormControl('', [
      
    ]),
    codigoPostal: new FormControl('', [
     
    ]),
    delegacion: new FormControl('', [
     
    ]),
    colonia: new FormControl('', [
      
    ]),
    ciudad: new FormControl('', [
      
    ]),
    pais: new FormControl('', []),
    descripcion: new FormControl('', [])

  });

  export const FormProperty = new FormGroup({
    tipoPropiedad: new FormControl('', [
      
    ]),
    rentaMensual: new FormControl('', [
      
    ]),
    precioVenta: new FormControl('', [
     
    ]),
    mantenimiento: new FormControl('', [
     
    ]),
   
  });