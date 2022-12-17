import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PropertyDetailHomeComponent } from "./components/property-detail-home/property-detail-home.component";

const routes: Routes = [
  { path: ":detailId", component: PropertyDetailHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertyDetailRoutingModule {}
