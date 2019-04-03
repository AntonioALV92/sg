import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-date',
  templateUrl: './request-date.component.html',
  styleUrls: ['./request-date.component.css']
})
export class RequestDateComponent implements OnInit {

  picturesZone = [
    {
      id: 1,
      title: 'Titulo',
      state: 'Disponible',
      zone: 'Polanco',
      categ: 'Departamentos',
      price: 10500,
      date: 'Martes',
      month: 'Febrero',
      location: 'CDMX',
      period: 'mensual',
      img: './assets/img/imgPrueba3.jpg'
    },
    {
      id: 2,
      title: 'Titulo',
      state: 'Disponible',
      zone: 'Roma',
      categ: 'Casas',
      price: 10500,
      date: 'Martes',
      month: 'Febrero',
      location: 'CDMX',
      period: 'mensual',
      img: './assets/img/imgPrueba3.jpg'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
