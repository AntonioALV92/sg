import { Component, OnInit } from '@angular/core';
import { linkApp } from 'src/app/shared/constants/constants-url';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  public link;
  constructor() {
    this.link = linkApp;
  }

  ngOnInit() {
  }

}
