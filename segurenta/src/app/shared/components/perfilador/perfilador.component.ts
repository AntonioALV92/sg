import { Component, OnInit } from '@angular/core';
import { FilterPipe } from '../../pipes/filter.pipe';


@Component({
  selector: 'app-perfilador',
  templateUrl: './perfilador.component.html',
  styleUrls: ['./perfilador.component.css']
})
export class PerfiladorComponent implements OnInit {
  n: number;
  public searchText = null;
  owners = [
    {
      id: 1,
      name: 'Fulanito Urrutia Martinez',
      CURP: '1BCD121212HOCPSN01'
    },
    {
      id: 2,
      name: 'Juan Godin Perez',
      CURP: '2BCD121212HOCPSN01'
    },
    {
      id: 3,
      name: 'José Alfredo Miravalle',
      CURP: '3BCD121212HOCPSN01'
    },
    {
      id: 4,
      name: 'German Estanislao Jimenez Rosales',
      CURP: '4BCD121212HOCPSN01'
    },
    {
      id: 5,
      name: 'Alejandrina Prado Niño de Rivera',
      CURP: '5BCD121212HOCPSN01'
    },
    {
      id: 6,
      name: 'Sofia Sodi Baltazar',
      CURP: '6BCD121212HOCPSN01'
    }
  ];

  constructor() {
    this.n = 1;
  }

  ngOnInit() {
  }

  step(n: number) {
    this.n = n;
  }

}
