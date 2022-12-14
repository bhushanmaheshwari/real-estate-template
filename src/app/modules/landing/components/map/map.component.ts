import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import env from 'src/environment/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  constructor() {}

  map!: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 22.719568;
  lng =  75.857727;

  ngOnInit() {
    this.map = new mapboxgl.Map({
      accessToken : env.mapbox.accessToken,
      container: 'map',
      style: this.style,
      zoom: 12,
      center: [this.lng, this.lat],
    });
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());
  }
}
