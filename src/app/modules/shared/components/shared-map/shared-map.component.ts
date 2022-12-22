import { Component, OnInit } from "@angular/core";
import { MapLayerService } from "src/app/services/business/map-layer.service";

@Component({
  selector: "app-shared-map",
  templateUrl: "./shared-map.component.html",
  styleUrls: ["./shared-map.component.scss"],
})
export class SharedMapComponent implements OnInit {
  constructor(private mapLayerService: MapLayerService) {}
  uluru = { lat: 22.719568, lng: 75.857727 };
  map?: google.maps.Map;
  ngOnInit() {
    this.mapLayerService.getBasicMapDataLayer().subscribe((data: any) => {
      this.loadMap(data);
    });
  }

  loadMap(data: any) {
    this.map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 12,
        center: this.uluru,
      }
    );
    for (let a of data.data.features) {
      const marker = new google.maps.Marker({
        position: {
          lat: a.geometry.coordinates[1],
          lng: a.geometry.coordinates[0],
        },
        map: this.map,
      });
    }
  }
}
