import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Login Guard
import { AuthGuard } from './auth/auth.guard';

// Main Routes - Depending on login status.
import { NotFoundComponent} from './404/notfound.component'; // Unknown page
import { LoginComponent } from './auth/login/login.component'; // Login for dashboard
import { DashboardComponent } from './dashboard/dashboard.component'; // This is the UI behind Auth - This is our main view.

// Child Routes Dashboard
import { Temperature } from './temperature/temperature.component';
import {RegisterComponent} from './auth/register/register.component'; // Page 3


const routes: Routes = [
  { path: 'Dashboard', component: DashboardComponent, canLoad: [AuthGuard],
    children: [
      { path: 'Main', component: Temperature, }
    ] },
  { path: 'Signup', component: RegisterComponent },
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
