import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfilador',
  templateUrl: './perfilador.component.html',
  styleUrls: ['./perfilador.component.css']
})
export class PerfiladorComponent implements OnInit {
  n: number;

  constructor() {
    this.n = 1;
  }

  ngOnInit() {
  }

  step(n: number) {
    this.n = n;
  }

}
