import { Component, OnInit } from '@angular/core';

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
      // tslint:disable-next-line:max-line-length
      img: 'https://e41ef2ad9891d7dd1442-94bb8684ffa0a53fb3624a3fb44b51a2.ssl.cf1.rackcdn.com/cliente/1398/fotosproductos/departamento-residencial-en-renta-en-colonia-jardines-de-virginia-boca-del-rio-16869_thumb.jpg'
    },
    {
      id: 2,
      title: 'Newspaper',
      img: 'https://i.ebayimg.com/images/g/ZacAAOSwGIZcOSuL/s-l400.jpg'
    },
    {
      id: 3,
      title: 'Favourite',
      img: 'https://i.ebayimg.com/images/g/ZHEAAOSwNqRcNjJy/s-l400.jpg'
    },
    {
      id: 4,
      title: 'Abstract',
      img: 'https://i.ebayimg.com/images/g/ci0AAOSwE8Vbx8kP/s-l400.jpg'
    },
    {
      id: 5,
      title: 'Tech',
      img: 'https://i.ebayimg.com/images/g/dZgAAOSw8MJbv5wC/s-l400.jpg'
    },
    {
      id: 6,
      title: 'Nightlife',
      img: 'https://i.ebayimg.com/images/g/PWYAAOSwj81boADF/s-l400.jpg'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
