import { Component, Input, OnInit } from "@angular/core";
import { MapLayerService } from "src/app/services/business/map-layer.service";

@Component({
  selector: "app-shared-map",
  templateUrl: "./shared-map.component.html",
  styleUrls: ["./shared-map.component.scss"],
})
export class SharedMapComponent implements OnInit {

  @Input() width = "100%";
  @Input() height = "100vh";
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [];
  options: google.maps.MapOptions = {
    center: { lat: 22.719568, lng: 75.85772 },
    zoom: 12,
    minZoom : 3,
  };


  constructor(private mapLayerService: MapLayerService) {}


  ngOnInit() {
    this.mapLayerService.getBasicMapDataLayer().subscribe((data: any) => {
      this.loadMap(data);
    });
  }

  loadMap(data: any) {
    const markers: google.maps.LatLngLiteral[] = [];
    for (let a of data.data.features) {
      markers.push({
        lat: a.geometry.coordinates[1],
        lng: a.geometry.coordinates[0],
      });
    }
    this.markerPositions = markers.slice();
  }
}
