// Author:
// Nikolaj Drejer
//
// Desription:
// Routing module for routes.
// We use child routes to our dashboard main view - only accessible after login
// Login and notfound is the two other Main Routes.

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Login Guard
import { AuthGuard } from './auth/auth.guard';

// Main Routes - Depending on login status.
import { NotFoundComponent} from './404/notfound.component'; // Unknown page
import { LoginComponent } from './auth/login/login.component'; // Login for dashboard
import { DashboardComponent } from './views/dashboard.component'; // This is the UI behind Auth - This is our main view.

// Child Routes Dashboard
import { VentsComponent } from './views/vents/vents.component'; // Page Vents
import { HumidityComponent } from './views/humidity/humidity.component'; // Page Humidity
import { ClaimComponent } from './views/claim/claim.component'; // Page Claiim
import { TemperatureComponent } from './views/temperature/temperature.component'; // Page Temperature
import { ClassComponent} from './class/class.component'; // Page Class


const routes: Routes = [
  { path: 'Dashboard', component: DashboardComponent, canLoad: [AuthGuard],
    children: [
      { path: 'Temperature', component: TemperatureComponent, },
      { path: 'Humidity', component: HumidityComponent },
      { path: 'Vents', component: VentsComponent },
      { path: 'Claim', component: ClaimComponent },
      { path: 'Classroom', component: ClassComponent }
    ] },
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
