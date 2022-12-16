import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {  
  myControl = new FormControl('');
  options: string[] = ['Indore', 'Sarafa', 'Palasia'];
  filteredOptions: Observable<string[]> = of([]);

  constructor() {
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
