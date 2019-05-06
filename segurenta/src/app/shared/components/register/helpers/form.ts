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
    Validators.pattern('[0-9]{16,20}$'),
    Validators.minLength(16),
    Validators.maxLength(20)
  ])
});

export const GetNumber = {
  minMax: (item: string) => {
    const num = {
      min: 0,
      max: 0
    };
    if (item.localeCompare('phoneNumber') === 0) {
      num.min = 10;
      num.max = 12;
    } else if (item.localeCompare('password') === 0) {
      num.min = 6;
      num.max = 10;
    } else if (item.localeCompare('clabe') === 0) {
      num.min = 16;
      num.max = 20;
    }
    return num;
  }
};
