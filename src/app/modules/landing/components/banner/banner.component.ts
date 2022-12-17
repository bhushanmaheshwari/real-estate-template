import { Component, OnInit } from "@angular/core";

import { FormControl } from "@angular/forms";
import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { map, startWith } from "rxjs/operators";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.scss"],
})
export class BannerComponent implements OnInit {
  myControl = new FormControl("");
  options: string[] = ["Indore", "Sarafa", "Palasia"];
  filteredOptions: Observable<string[]> = of([]);

  constructor(private ar: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map((value) => this._filter(value || ""))
    );
  }

  navigateToSearch($event: MatAutocompleteSelectedEvent) {
    const q = $event.option.value;
    this.router.navigate(["search"], { queryParams: { q } });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
