import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  estado: string = 'Disponible';
  precio: number = 17000;
  periodicidad: string = 'mensual';

  constructor() { }

  ngOnInit() {
  }

}
