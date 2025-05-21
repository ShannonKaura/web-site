import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientLandingComponent } from './views/client/client-landing/client-landing.component';

const routes: Routes = [
  // {
  //   path: '', redirectTo: '', pathMatch: 'full',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
