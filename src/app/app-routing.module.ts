// Dependencies

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { PageNotFoundComponent } from './notfound.component';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: '**', component: PageNotFoundComponent },  // Wildcard Route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
