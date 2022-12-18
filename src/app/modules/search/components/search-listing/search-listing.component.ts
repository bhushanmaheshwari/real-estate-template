import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MapLayerService } from "src/app/services/business/map-layer.service";

@Component({
  selector: "app-search-listing",
  templateUrl: "./search-listing.component.html",
  styleUrls: ["./search-listing.component.scss"],
})
export class SearchListingComponent implements OnInit {
  properties: any[] = [];

  constructor(
    private mapLayerService: MapLayerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.mapLayerService.getBasicMapData().subscribe((data: any[]) => {
      this.properties = data || [];
    });
  }

  navigateToDetails(e: any) {
    this.router.navigate(["details", e.name || 'no name']);
  }
}
