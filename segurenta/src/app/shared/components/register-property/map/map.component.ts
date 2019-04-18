import { MapsAPILoader } from '@agm/core';
import { Component, OnInit } from '@angular/core';

import PlaceResult = google.maps.places.PlaceResult;
import GeocoderRequest = google.maps.GeocoderRequest;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public lat = 51.678418;
  public lng = 7.809007;

  constructor(private mapsAPILoader: MapsAPILoader) { }

  ngOnInit(): void {
    this.mapsAPILoader.load().then(() => {

      // const bounds = new google.maps.LatLngBounds(
      //   new google.maps.LatLng(54.69726685890506, -2.7379201682812226),
      //   new google.maps.LatLng(55.38942944437183, -1.2456105979687226)
      // );

    });
  }
}
