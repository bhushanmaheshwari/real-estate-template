import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-property-detail-home",
  templateUrl: "./property-detail-home.component.html",
  styleUrls: ["./property-detail-home.component.scss"],
})
export class PropertyDetailHomeComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];
  title = "";
  constructor(private ar: ActivatedRoute) {}

  ngOnInit() {
    this.subscribeToRouteParams();
  }

  subscribeToRouteParams() {
    this.subs.push(
      this.ar.params.subscribe((params: any) => {
        this.title = params.detailId;
        scroll(0, 0);
      })
    );
  }

  ngOnDestroy() {
    this.subs.forEach((x) => x.unsubscribe());
  }
}
