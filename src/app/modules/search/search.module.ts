import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchHomeComponent } from './components/search-home/search-home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialExampleModule } from '../material.module';
import { SearchMapComponent } from './components/search-map/search-map.component';
import { SearchListingComponent } from './components/search-listing/search-listing.component';
import { SearchToolbarComponent } from './components/search-toolbar/search-toolbar.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SearchHomeComponent,
    SearchMapComponent,
    SearchListingComponent,
    SearchToolbarComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    MaterialExampleModule,
    LayoutModule,
    SharedModule
  ]
})
export class SearchModule { }
