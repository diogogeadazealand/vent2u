// Made by Nikolaj
// The Router is using guard to prevent users from accessing Default

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Pages
import { AuthGuard } from './auth/auth.guard';
import { PageNotFoundComponent } from './notfound.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './dashboard/main/main.component';
import { VentsComponent } from './dashboard/vents/vents.component';
import { ClaimComponent } from './dashboard/claim/claim.component';

const routes: Routes = [
  { path: 'Dashboard', component: DashboardComponent, canLoad: [AuthGuard], children: [
      { path: 'Main', component: MainComponent, },
      { path: 'Vents', component: VentsComponent },
      { path: 'Claim', component: ClaimComponent }
    ] },
  { path: '',   component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
