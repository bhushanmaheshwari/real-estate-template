import { Component, Input } from "@angular/core";

@Component({
  selector: "app-property-detail-banner",
  templateUrl: "./property-detail-banner.component.html",
  styleUrls: ["./property-detail-banner.component.scss"],
})
export class PropertyDetailBannerComponent {
  @Input() title = "";
}
