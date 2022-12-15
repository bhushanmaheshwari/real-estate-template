import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { MapService } from "../core/map.service";

@Injectable({
  providedIn: "root",
})
export class MapLayerService {
  constructor(private mapService: MapService) {}

  getBasicMapData() {
    return this.mapService.getMapData("").pipe(
      map((properties: any[]) => {
        const locations = properties.map((p) => {
          return {
            name: p?.heading || p?.BUILDING_NAME,
            localityName: p?.location?.localityName || p?.LOCALITY,
            latitude: p?.location?.latitude || p?.MAP_DETAILS?.LATITUDE,
            longitude: p?.location?.longitude || p?.MAP_DETAILS?.LONGITUDE,
            thumbnailUrl: p?.coverImage?.url || p?.MEDIUM_PHOTO_URL,
            description: (
              p?.description?.text ||
              p?.DESCRIPTION ||
              ""
            ).substring(0, 100),
          };
        });
        return locations;
      })
    );
  }

  getBasicMapDataLayer() {
    return this.mapService.getMapData("").pipe(
      map((properties: any[]) => {
        const locations = properties.map((p) => {
          return {
            name: p?.heading || p?.BUILDING_NAME,
            localityName: p?.location?.localityName || p?.LOCALITY,
            latitude: p?.location?.latitude || p?.MAP_DETAILS?.LATITUDE,
            longitude: p?.location?.longitude || p?.MAP_DETAILS?.LONGITUDE,
            thumbnailUrl: p?.coverImage?.url || p?.MEDIUM_PHOTO_URL,
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
