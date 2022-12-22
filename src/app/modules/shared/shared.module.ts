import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GoogleMapsModule } from "@angular/google-maps";
import { SharedMapComponent } from "./components/shared-map/shared-map.component";

@NgModule({
  declarations: [SharedMapComponent],
  imports: [CommonModule, GoogleMapsModule],
  exports: [SharedMapComponent],
})
export class SharedModule {}
