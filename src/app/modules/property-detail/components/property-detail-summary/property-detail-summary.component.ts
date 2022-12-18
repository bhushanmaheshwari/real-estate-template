import { Component } from "@angular/core";

@Component({
  selector: "app-property-detail-summary",
  templateUrl: "./property-detail-summary.component.html",
  styleUrls: ["./property-detail-summary.component.scss"],
})
export class PropertyDetailSummaryComponent {
  showAllFacilities = false;
  coreAttributes = ["2-3 BHK", "5000 SQFT", "EAST Facing"];
  coreFacilities = [
    { icon: "pool", name: "Swimming Pool", subtitle: "centrally located" },
    {
      icon: "directions_car",
      name: "Parking",
      subtitle: "free parking on premises",
    },
    { icon: "kitchen", name: "Kitchen", subtitle: "with wooden flooring" },
    { icon: "spa", name: "Terrace Garden", subtitle: "with kitchen access" },
  ];
  additionalFacilities = [
    {
      icon: "weekend",
      name: "Vastu Compliant",
      subtitle: "for all the positive energy",
    },
    { icon: "casino", name: "Indoor Games", subtitle: "carrom, pool table, etc" },
    { icon: "whatshot", name: "Piped Gas", subtitle: "and metered ready" },
    { icon: "library_music", name: "Party Lawn", subtitle: "on prebooking basis" },
    { icon: "business", name: "Business Center", subtitle: "for all the residents" },
  ];
  constructor() {}

  toggleShowAllFacilities() {
    this.showAllFacilities = !this.showAllFacilities;
  }
}
