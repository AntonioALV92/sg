import { Component, OnInit } from '@angular/core';
import { linkApp } from 'src/app/shared/constants/constants-url';

@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.component.html',
  styleUrls: ['./publicar.component.css']
})
export class PublicarComponent implements OnInit {

  public link;

  constructor() {
    this.link = linkApp;
  }

  ngOnInit() {
  }

}
