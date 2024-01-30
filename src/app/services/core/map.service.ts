import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { of } from "rxjs";
import env from "src/environment/environment";

@Injectable({
  providedIn: "root",
})
export class MapService {
  constructor(private http: HttpClient) {}

  lookupProperties(props: any) {
    return this.http.get(env.api.core + env.api.lookup).pipe(
      map((data: any) => {
        console.log(data);
        return data;
      })
    );
  }

  getProperties(props: any) {
    
    return this.http.get('assets/jsons/mayank.json').pipe(
    // return this.http.get(env.api.core + env.api.properties).pipe(
      map((data: any) => {
        console.log(data);
        return data;
      })
    );
  }
}
