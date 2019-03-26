import { Component, OnInit } from '@angular/core';
import { PortalInjector } from '@angular/cdk/portal';
import { Globals } from 'src/app/interfaces/catalog.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
  picturesZone = [
    {
      id: 1,
      title: 'Titulo',
      zone: 'Polanco',
      categ: 'Departamentos',
      price: 10500,
      // tslint:disable-next-line:max-line-length
      // img: 'https://e41ef2ad9891d7dd1442-94bb8684ffa0a53fb3624a3fb44b51a2.ssl.cf1.rackcdn.com/cliente/1398/fotosproductos/departamento-residencial-en-renta-en-colonia-jardines-de-virginia-boca-del-rio-16869_thumb.jpg'
      img: './assets/img/imgPrueba3.jpg'
    },
    {
      id: 2,
      title: 'Titulo',
      zone: 'Roma',
      categ: 'Casas',
      // img: 'https://i.ebayimg.com/images/g/ZacAAOSwGIZcOSuL/s-l400.jpg'
      img: './assets/img/imgPrueba3.jpg'
    }
  ];

  linkFacebook: string;
  linkInstagram: string;
  linkTwitter: string;
  linkLinkedIn: string;
  linkAppStore: string;
  linkPlayStore: string;
  isLogged: boolean;

  firstCarousel: [
    { urlImage: './assets/img/bgHome.png', order: 2, active: false },
    { urlImage: './assets/img/bgHome.png', order: 3, active: false },
    { urlImage: './assets/img/bgHome.png', order: 1, active: true },
    { urlImage: './assets/img/bgHome.png', order: 4, active: false }
  ];
  countNews: number;
  // isLoading: boolean;
  constructor() {

    // this.isLoading = true;
    this.countNews = 30;
    this.linkFacebook = 'https://es-la.facebook.com/Segurenta/';
    this.linkInstagram = 'https://www.instagram.com/segurenta/';
    this.linkTwitter = 'https://twitter.com/segurenta?lang=es';
    this.linkLinkedIn = 'https://mx.linkedin.com/company/segurenta';
    this.linkAppStore = 'https://itunes.apple.com/mx/app/lego-the-incredibles/id1437257847?mt=12';
    this.linkPlayStore = 'https://play.google.com/store/apps/details?id=in.loop.hdmakeover';
    // this.isLoading = false;
  }

  ngOnInit() {
  }


}
