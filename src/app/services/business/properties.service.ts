import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { MapService } from "../core/map.service";

@Injectable({
  providedIn: "root",
})
export class PropertiesService {
  constructor(private mapService: MapService) {}

  getAllProperties() {
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
            plotSize : p?.PLOT_SIZE,
            priceRange : p?.PRICE_RANGE
          };
        });
        return locations;
      })
    );
  }

  getPropertyLocalities() {
    return this.mapService.lookupProperties("").pipe(
      map((response: any) => {
        const properties =
          response?.status === "success" ? response?.data?.localities : [];
        const locations = properties.map((p: any) => {
          return {
            name: p?._id,
            count: p?.COUNT,
          };
        });
        return locations;
      })
    );
  }
}
