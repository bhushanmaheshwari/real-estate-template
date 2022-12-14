import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingHomeComponent } from './components/landing-home/landing-home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch : 'full',
    component: LandingHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
