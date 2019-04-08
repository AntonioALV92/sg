import { FormGroup, FormControl, Validators } from '@angular/forms';

export const FormRegisterRent = new FormGroup({
  names: new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-ZñÑ ]{0,40}$')
  ]),
  firstLastName: new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-ZñÑ ]{0,40}$')
  ]),
  secondLastName: new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-ZñÑ ]{0,40}$')
  ]),
  phoneNumber: new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9]{0,}$'),
    Validators.minLength(10),
    Validators.maxLength(12)
  ]),
  email: new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
  ]),
  password: new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(10)
  ]),
  bankName: new FormControl('', []),
  clabe: new FormControl('', [])
});

export const FormRegisterAdviser = new FormGroup({
  names: new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-ZñÑ ]{0,40}$')
  ]),
  firstLastName: new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-ZñÑ ]{0,40}$')
  ]),
  secondLastName: new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-ZñÑ ]{0,40}$')
  ]),
  phoneNumber: new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9]{0,}$'),
    Validators.minLength(10),
    Validators.maxLength(12)
  ]),
  email: new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
  ]),
  password: new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(10)
  ]),
  bankName: new FormControl('', [
    Validators.required
  ]),
  clabe: new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9]{0,}$'),
    Validators.minLength(16),
    Validators.maxLength(20)
  ])
});
