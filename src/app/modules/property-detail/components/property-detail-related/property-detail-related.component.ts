import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { MapLayerService } from "src/app/services/business/map-layer.service";

@Component({
  selector: "app-property-detail-related",
  templateUrl: "./property-detail-related.component.html",
  styleUrls: ["./property-detail-related.component.scss"],
})
export class PropertyDetailRelatedComponent {
  related: any[] = [];
  constructor(
    private mapLayerService: MapLayerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.mapLayerService.getBasicMapData().subscribe((data: any[]) => {
      this.related = (data || []).slice(0, 6);
    });
  }

  navigateToDetails(e: any) {
    this.router.navigate(["details", e.name || 'no name']);
  }
}
