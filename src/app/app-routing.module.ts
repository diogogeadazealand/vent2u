import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Login Guard
import { AuthGuard } from './auth/auth.guard';

// Main Routes - Depending on login status.
import { NotFoundComponent} from './404/notfound.component'; // Unknown page
import { LoginComponent } from './auth/login/login.component'; // Login for dashboard

// Child Routes Dashboard
import { VentsComponent } from './views/vents/vents.component'; // Page2
import { ClaimComponent } from './views/claim/claim.component';
import { Temperature } from './views/temperature/temperature.component'; // Page 3


const routes: Routes = [
  { path: 'Main', component: Temperature, canLoad: [AuthGuard]},
  { path: 'Vents', component: VentsComponent, canLoad: [AuthGuard]},
  { path: 'Claim', component: ClaimComponent, canLoad: [AuthGuard] },
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
