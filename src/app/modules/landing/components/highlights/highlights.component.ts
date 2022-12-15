import { Component, OnInit } from "@angular/core";
import { MapLayerService } from "src/app/services/business/map-layer.service";

@Component({
  selector: "app-highlights",
  templateUrl: "./highlights.component.html",
  styleUrls: ["./highlights.component.scss"],
})
export class HighlightsComponent implements OnInit {
  highlights: any[] = [];
  constructor(private mapLayerService: MapLayerService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.mapLayerService.getBasicMapData().subscribe((data: any[]) => {
      this.highlights = (data || []).slice(0, 6);
    });
  }
}
