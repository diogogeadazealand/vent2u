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
import { HumidityComponent } from './views/humidity/humidity.component'; // Page Humidity
import { ClaimComponent } from './views/claim/claim.component'; // Page Claiim
import { TemperatureComponent } from './views/temperature/temperature.component'; // Page Temperature
import { ClassComponent} from './views/class/class.component'; // Page Class
import { VentControllComponent } from './views/vent-controll/vent-controll.component';


const routes: Routes = [
  { path: '', component: DashboardComponent,
    children: [
      { 
        path: '', component: VentControllComponent,
        children: [
          { path: '', component: TemperatureComponent, },
          { path: 'humidity', component: HumidityComponent },
        ] },
        { path: 'classroom', component: ClassComponent, canLoad: [AuthGuard] },
        { path: 'room', component: ClassComponent, canLoad: [AuthGuard] },
        { path: 'claim', component: ClaimComponent, canLoad: [AuthGuard] }
    ]
  },
  { path: 'login',   component: LoginComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
