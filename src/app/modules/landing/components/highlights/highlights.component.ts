import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MapLayerService } from "src/app/services/business/map-layer.service";

@Component({
  selector: "app-highlights",
  templateUrl: "./highlights.component.html",
  styleUrls: ["./highlights.component.scss"],
})
export class HighlightsComponent implements OnInit {
  highlights: any[] = [];
  constructor(
    private mapLayerService: MapLayerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.mapLayerService.getBasicMapData().subscribe((data: any[]) => {
      this.highlights = (data || []).slice(0, 6);
    });
  }

  navigateToDetails(e: any) {
    this.router.navigate(["details", e.name || 'no name']);
  }
}
