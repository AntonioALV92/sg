import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-property',
  templateUrl: './my-property.component.html',
  styleUrls: ['./my-property.component.css']
})
export class MyPropertyComponent implements OnInit {

  pictures = [
    {
      id: 1,
      title: 'Titulo',
      state: 'Disponible',
      location: 'CDMX',
      characteristic: [
        {
          iconCharac: '',
          valueCharac: ''
        },
        {
          iconCharac: '',
          valueCharac: ''
        },
        {
          iconCharac: '',
          valueCharac: ''
        }
      ],
      price: 10500,
      period: 'mensual',
      img: './assets/img/imgPrueba3.jpg'
    },
    {
      id: 2,
      title: 'Newspaper',
      state: 'Disponible',
      location: 'CDMX',
      price: 10500,
      period: 'mensual',
      img: './assets/img/imgPrueba3.jpg'
    },
    {
      id: 3,
      title: 'Favourite',
      state: 'Disponible',
      location: 'CDMX',
      price: 10500,
      period: 'mensual',
      img: './assets/img/imgPrueba3.jpg'
    },
    {
      id: 4,
      title: 'Abstract',
      state: 'Disponible',
      location: 'CDMX',
      price: 10500,
      period: 'mensual',
      img: './assets/img/imgPrueba3.jpg'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
