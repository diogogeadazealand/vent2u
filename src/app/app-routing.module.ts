import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Login Guard
import { AuthGuard } from './auth/auth.guard';

// Main Routes - Depending on login status.
import { NotFoundComponent} from './404/notfound.component'; // Unknown page
import { LoginComponent } from './auth/login/login.component'; // Login for dashboard
import { DashboardComponent } from './views/dashboard.component'; // This is the UI behind Auth - This is our main view.

// Child Routes Dashboard
import { VentsComponent } from './views/vents/vents.component'; // Page2
import { ClaimComponent } from './views/claim/claim.component';
import { Temperature } from './views/temperature/temperature.component';
import {RegisterComponent} from './auth/register/register.component'; // Page 3


const routes: Routes = [
  { path: 'Dashboard', component: DashboardComponent, canLoad: [AuthGuard],
    children: [
      { path: 'Temperature', component: Temperature, },
      { path: 'Vents', component: VentsComponent },
      { path: 'Claim', component: ClaimComponent }
    ] },
  { path: 'Register', component: RegisterComponent },
  { path: '',   component: LoginComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
