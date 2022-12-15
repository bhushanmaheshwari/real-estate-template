import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class MapService {
  constructor(private http: HttpClient) {}

  getMapData(props: any) {
    return this.http.get("assets/jsons/properties.json").pipe(
      map((data: any) => {
        return data?.properties;
      })
    );
  }
}
