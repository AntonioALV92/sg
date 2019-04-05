import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propiedades-recientes',
  templateUrl: './propiedades-recientes.component.html',
  styleUrls: ['./propiedades-recientes.component.css']
})
export class PropiedadesRecientesComponent implements OnInit {

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
      // tslint:disable-next-line:max-line-length
      // img: 'https://e41ef2ad9891d7dd1442-94bb8684ffa0a53fb3624a3fb44b51a2.ssl.cf1.rackcdn.com/cliente/1398/fotosproductos/departamento-residencial-en-renta-en-colonia-jardines-de-virginia-boca-del-rio-16869_thumb.jpg'
      img: './assets/img/imgPrueba3.jpg'
    },
    {
      id: 2,
      title: 'Newspaper',
      state: 'Disponible',
      location: 'CDMX',
      price: 10500,
      period: 'mensual',
      // img: 'https://i.ebayimg.com/images/g/ZacAAOSwGIZcOSuL/s-l400.jpg'
      img: './assets/img/imgPrueba3.jpg'
    },
    {
      id: 3,
      title: 'Favourite',
      state: 'Disponible',
      location: 'CDMX',
      price: 10500,
      period: 'mensual',
      // img: 'https://i.ebayimg.com/images/g/ZHEAAOSwNqRcNjJy/s-l400.jpg'
      img: './assets/img/imgPrueba3.jpg'
    },
    {
      id: 4,
      title: 'Abstract',
      state: 'Disponible',
      location: 'CDMX',
      price: 10500,
      period: 'mensual',
      // img: 'https://i.ebayimg.com/images/g/ci0AAOSwE8Vbx8kP/s-l400.jpg'
      img: './assets/img/imgPrueba3.jpg'
    },
    {
      id: 5,
      title: 'Tech',
      state: 'Disponible',
      location: 'CDMX',
      price: 10500,
      period: 'mensual',
      // tslint:disable-next-line:max-line-length
      // img: 'https://e41ef2ad9891d7dd1442-94bb8684ffa0a53fb3624a3fb44b51a2.ssl.cf1.rackcdn.com/cliente/1398/fotosproductos/departamento-residencial-en-renta-en-colonia-jardines-de-virginia-boca-del-rio-16869_thumb.jpg'
      img: './assets/img/imgPrueba3.jpg'
    },
    {
      id: 6,
      title: 'Nightlife',
      state: 'Disponible',
      location: 'CDMX',
      price: 10500,
      period: 'mensual',
      // img: 'https://i.ebayimg.com/images/g/PWYAAOSwj81boADF/s-l400.jpg'
      img: './assets/img/imgPrueba3.jpg'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
