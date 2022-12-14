import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  {
    path: 'landing',
    loadChildren: () =>
      import('./modules/landing/landing.module').then((x) => x.LandingModule),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./modules/search/search.module').then((x) => x.SearchModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
