import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingHomeComponent } from './components/landing-home/landing-home.component';
import { MapComponent } from './components/map/map.component';
import { BannerComponent } from './components/banner/banner.component';
import { HighlightsComponent } from './components/highlights/highlights.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { MaterialExampleModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LandingHomeComponent,
    MapComponent,
    BannerComponent,
    HighlightsComponent,
    ContactFormComponent,
  ],
  imports: [
    CommonModule,
    MaterialExampleModule,
    LandingRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LandingModule { }
