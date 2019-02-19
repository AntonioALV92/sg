import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  esPropietario: boolean;
  esPublicar: boolean;
  esRenta: boolean = true;
  title: string = 'Rentar';

  constructor() { }

  ngOnInit() {
  }

  changeRegister(opt: number) {
    switch (opt) {
      case 1: {
          this.esRenta = true;
          this.esPublicar = false;
          this.esPropietario = false;
          this.title = 'Rentar';
          break;
      }
      case 2: {
        this.esRenta = false;
        this.esPublicar = true;
        this.esPropietario = false;
        this.title = 'Publicar';
        break;
      }
      case 3: {
        this.esRenta = false;
        this.esPublicar = false;
        this.esPropietario = true;
        this.title = 'Propietario';
        break;
      }
      default: {
        break;
      }

    }
  }
}
