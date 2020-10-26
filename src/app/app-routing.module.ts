import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Login Guard
import { AuthGuard } from './auth/auth.guard';

// Main Routes - Depending on login status.
import { NotFoundComponent} from './404/notfound.component'; // Unknown page
import { LoginComponent } from './auth/login/login.component'; // Login for dashboard
import { DashboardComponent } from './dashboard/dashboard.component'; // This is the UI behind Auth - This is our main view.

// Child Routes Dashboard
import { MainComponent } from './dashboard/main/main.component'; // Page1
import { VentsComponent } from './dashboard/vents/vents.component'; // Page2
import { ClaimComponent } from './dashboard/claim/claim.component';
import { Temperature } from './temperature/temperature.component'; // Page 3
import { ClassComponent } from './class/class.component';


const routes: Routes = [
  { path: 'Dashboard', component: DashboardComponent, canLoad: [AuthGuard],
    children: [
      { path: 'Main', component: Temperature, },
      { path: 'Vents', component: VentsComponent },
      { path: 'Classroom', component: ClassComponent }, // TODO I guess this should be in another child of child
      { path: 'Claim', component: ClaimComponent }
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
