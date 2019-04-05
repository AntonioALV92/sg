import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explorar-zona',
  templateUrl: './explorar-zona.component.html',
  styleUrls: ['./explorar-zona.component.css']
})
export class ExplorarZonaComponent implements OnInit {

  countNews = 30;

  picturesZone = [
    {
      id: 1,
      title: 'Titulo',
      zone: 'Polanco',
      categ: 'Departamentos',
      price: 10500,
      img: './assets/img/imgPrueba3.jpg'
    },
    {
      id: 2,
      title: 'Titulo',
      zone: 'Roma',
      categ: 'Casas',
      img: './assets/img/imgPrueba3.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
