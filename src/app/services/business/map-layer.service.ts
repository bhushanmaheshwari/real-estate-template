import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { MapService } from "../core/map.service";

@Injectable({
  providedIn: "root",
})
export class MapLayerService {
  constructor(private mapService: MapService) {}

  getBasicMapDataLayer() {
    return this.mapService.getProperties("").pipe(
      map((response: any) => {
        const properties =
          response?.status === "success" ? response?.data?.properties : [];
        const locations = properties.map((p: any) => {
          return {
            name: p?.PROP_HEADING,
            localityName: p?.LOCALITY_NAME,
            latitude: p?.LATITUDE,
            longitude: p?.LONGITUDE,
            thumbnailUrl:
              "https://newprojects.99acres.com/projects/omaxe/omaxe_shubhangan/images/j5zur5wx_optOrig.jpg" ||
              p?.PHOTO_URL,
            description: p?.DESCRIPTION,
          };
        });
        return this.createGeoJson(locations);
      })
    );
  }

  createGeoJson(locations: any[]) {
    const features = locations.map((loc) => {
      return {
        type: "Feature",
        properties: {
          description: loc.name || loc.localityName,
          thumbnailUrl: loc.thumbnailUrl,
        },
        geometry: {
          type: "Point",
          coordinates: [Number(loc.longitude), Number(loc.latitude)],
        },
      };
    });
    return {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features,
      },
    };
  }
}
