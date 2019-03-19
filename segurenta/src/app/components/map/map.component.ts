import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: number = 19.370006;
  lng: number = -99.266552;
  constructor() { }

  ngOnInit() {
  }

}
