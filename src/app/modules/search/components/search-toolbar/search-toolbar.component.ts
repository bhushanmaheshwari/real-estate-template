import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-search-toolbar",
  templateUrl: "./search-toolbar.component.html",
  styleUrls: ["./search-toolbar.component.scss"],
})
export class SearchToolbarComponent implements OnInit {
  filters: any[] = [];
  constructor() {}
  ngOnInit() {
    this.getFilterData();
  }

  getFilterData() {
    this.filters = [
      { icon: "public", title: "All Properties" },
      { icon: "apps", title: "Plots" },
      { icon: "palette", title: "Bungalows" },
      { icon: "business_center", title: "Commercials" },
      { icon: "beach_access", title: "Farmhouses" },
      { icon: "domain", title: "Apartments" },
    ];
  }
}
