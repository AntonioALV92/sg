import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
      propertyType: 'Oficina',
      location: 'Perisur, CDMX',
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
      img: './assets/img/1.jpg'
    },
    {
      id: 2,
      title: 'Newspaper',
      state: 'Disponible',
      propertyType: 'Oficina',
      location: 'Perisur, CDMX',
      price: 10500,
      period: 'mensual',
      // img: 'https://i.ebayimg.com/images/g/ZacAAOSwGIZcOSuL/s-l400.jpg'
      img: './assets/img/imgPrueba3.jpg'
    },
    {
      id: 3,
      title: 'Favourite',
      state: 'Disponible',
      propertyType: 'Oficina',
      location: 'Perisur, CDMX',
      price: 10500,
      period: 'mensual',
      // img: 'https://i.ebayimg.com/images/g/ZHEAAOSwNqRcNjJy/s-l400.jpg'
      img: './assets/img/imgPrueba3.jpg'
    },
    {
      id: 4,
      title: 'Abstract',
      state: 'Disponible',
      propertyType: 'Oficina',
      location: 'Perisur, CDMX',
      price: 10500,
      period: 'mensual',
      // img: 'https://i.ebayimg.com/images/g/ci0AAOSwE8Vbx8kP/s-l400.jpg'
      img: './assets/img/imgPrueba3.jpg'
    },
    {
      id: 5,
      title: 'Tech',
      state: 'Disponible',
      propertyType: 'Oficina',
      location: 'Perisur, CDMX',
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
      propertyType: 'Oficina',
      location: 'Perisur, CDMX',
      price: 10500,
      period: 'mensual',
      // img: 'https://i.ebayimg.com/images/g/PWYAAOSwj81boADF/s-l400.jpg'
      img: './assets/img/imgPrueba3.jpg'
    },
  ];

  property = {
    alias: 'DEPARTAMENTO 87m2 Del Valle, CDMX',
    periodicidad: 'Mensual',
    precioRenta: 10000,
    mantenimiento: 500,
    // tslint:disable-next-line:max-line-length
    descripcion: 'Estrene precioso departamento en piso 12, con balcón, finos acabados, hermosa vista, fascinantes amenidades desde pista de hielo hasta servicios básicos, desarrollo vanguardista, ecológico, con servicios económicos, valet parking y vigilancia las 24 hrs.',
    estatus: 'Disponible',
    urlVideo: './assets/video/videoPrueba.mp4',
    caracteristicas: [
      { valor: '89', tipo: 'fas', icono: 'expand-arrows-alt'},
      { valor: '2', tipo: 'fas', icono: 'bed'},
      { valor: '1', tipo: 'fas', icono: 'toilet'},
      { valor: '1', tipo: 'fas', icono: 'expand-arrows-alt'},
      { valor: '2', tipo: 'fas', icono: 'bed'},
      { valor: '135', tipo: 'fas', icono: 'toilet'}
    ]
  };
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  public openDetail(id: number) {
    this.router.navigateByUrl('/propertyDetail/'+id);
  }

}
