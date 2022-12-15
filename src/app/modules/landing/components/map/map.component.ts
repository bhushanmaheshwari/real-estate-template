import { Component, OnInit } from "@angular/core";
import * as mapboxgl from "mapbox-gl";
import { MapLayerService } from "src/app/services/business/map-layer.service";
import env from "src/environment/environment";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"],
})
export class MapComponent implements OnInit {
  constructor(private mapLayerService: MapLayerService) {}

  map!: mapboxgl.Map;
  style = "mapbox://styles/mapbox/streets-v11";
  lat = 22.719568;
  lng = 75.857727;

  ngOnInit() {
    this.mapLayerService.getBasicMapDataLayer().subscribe((data: any) => {
      this.loadMap(data);
    });
  }

  loadMap(data: any) {
    this.map = new mapboxgl.Map({
      accessToken: env.mapbox.accessToken,
      container: "map",
      style: this.style,
      zoom: 11,
      center: [this.lng, this.lat],
    });
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());

    this.map.on("load", () => {
      this.map.addSource("places", data);
      // Add a layer showing the places.
      this.map.addLayer({
        id: "places",
        type: "circle",
        source: "places",
        paint: {
          "circle-color": "#4264fb",
          "circle-radius": 10,
          "circle-stroke-width": 2,
          "circle-stroke-color": "#ffffff",
        },
      });

      // Create a popup, but don't add it to the map yet.
      const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
      });

      this.map.on("mouseenter", "places", (e: any) => {
        // Change the cursor style as a UI indicator.
        this.map.getCanvas().style.cursor = "pointer";

        // Copy coordinates array.
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;
        const thumbnailUrl = e.features[0].properties.thumbnailUrl;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        // Populate the popup and set its coordinates
        // based on the feature found.
        const html = `
          <h3>${description}</h3>
          <img style="width:150px" src="${thumbnailUrl}" alt="${description}">`;
        popup.setLngLat(coordinates).setHTML(html).addTo(this.map);
      });

      this.map.on("mouseleave", "places", () => {
        this.map.getCanvas().style.cursor = "";
        popup.remove();
      });
    });
  }
}
