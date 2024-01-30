import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PropertiesService } from "src/app/services/business/properties.service";

@Component({
  selector: "app-highlights",
  templateUrl: "./highlights.component.html",
  styleUrls: ["./highlights.component.scss"],
})
export class HighlightsComponent implements OnInit {
  highlights: any[] = [];
  constructor(
    private propertiesService: PropertiesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.propertiesService.getAllProperties().subscribe((data: any[]) => {
      this.highlights = (data || []);
    });
  }

  navigateToDetails(e: any) {
    this.router.navigate(["details", e.name || 'no name']);
  }
}
