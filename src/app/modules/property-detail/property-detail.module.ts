import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyDetailRoutingModule } from './property-detail-routing.module';
import { PropertyDetailHomeComponent } from './components/property-detail-home/property-detail-home.component';
import { MaterialExampleModule } from '../material.module';
import { PropertyDetailBannerComponent } from './components/property-detail-banner/property-detail-banner.component';
import { PropertyDetailImagesComponent } from './components/property-detail-images/property-detail-images.component';
import { PropertyDetailSummaryComponent } from './components/property-detail-summary/property-detail-summary.component';
import { PropertyDetailRelatedComponent } from './components/property-detail-related/property-detail-related.component';


@NgModule({
  declarations: [
    PropertyDetailHomeComponent,
    PropertyDetailBannerComponent,
    PropertyDetailImagesComponent,
    PropertyDetailSummaryComponent,
    PropertyDetailRelatedComponent
  ],
  imports: [
    CommonModule,
    PropertyDetailRoutingModule,
    MaterialExampleModule
  ]
})
export class PropertyDetailModule { }
