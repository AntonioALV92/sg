import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialogRef, MatDialog } from '@angular/material';
import { RegisterPropertyComponent } from '../register-property/register-property.component';
import { Globals } from 'src/app/interfaces/catalog.interface';

@Component({
  selector: 'app-home-adviser',
  templateUrl: './home-adviser.component.html',
  styleUrls: ['./home-adviser.component.css']
})
export class HomeAdviserComponent implements OnInit {
  isLogged: boolean;
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
    }
  ];
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
      // tslint:disable-next-line:max-line-length
      // img: 'https://e41ef2ad9891d7dd1442-94bb8684ffa0a53fb3624a3fb44b51a2.ssl.cf1.rackcdn.com/cliente/1398/fotosproductos/departamento-residencial-en-renta-en-colonia-jardines-de-virginia-boca-del-rio-16869_thumb.jpg'
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
  countNews: number;

  registerDialogRef: MatDialogRef<RegisterPropertyComponent>;


  constructor(private dialog: MatDialog, private globals: Globals) {
    globals.isLogged = true;
    this.isLogged = globals.isLogged;

    this.countNews = 43;
    this.linkFacebook = 'https://es-la.facebook.com/Segurenta/';
    this.linkInstagram = 'https://www.instagram.com/segurenta/';
    this.linkTwitter = 'https://twitter.com/segurenta?lang=es';
    this.linkLinkedIn = 'https://mx.linkedin.com/company/segurenta';
    this.linkAppStore = 'https://itunes.apple.com/mx/app/lego-the-incredibles/id1437257847?mt=12';
    this.linkPlayStore = 'https://play.google.com/store/apps/details?id=in.loop.hdmakeover';
  }

  ngOnInit() {
  }

  openRegisterProperty() {
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.direction = 'ltr';
    dialogConfig.width = '100vw';
    dialogConfig.maxWidth = '98vw';
    dialogConfig.panelClass = 'dialog-register';


    this.registerDialogRef = this.dialog.open(RegisterPropertyComponent, dialogConfig);
  }

}
