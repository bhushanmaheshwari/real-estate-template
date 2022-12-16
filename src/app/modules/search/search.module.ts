import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchHomeComponent } from './components/search-home/search-home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialExampleModule } from '../material.module';


@NgModule({
  declarations: [
    SearchHomeComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    MaterialExampleModule,
    LayoutModule
  ]
})
export class SearchModule { }
