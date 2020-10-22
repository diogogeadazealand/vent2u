import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Pages
import { DefaultComponent } from './default.component';
import { PageNotFoundComponent } from './notfound.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [

  // {  // Default Layout Page
  //   path: 'default',
  //   canDeactivate: [],
  //   canActivate: [AuthGuard],
  //   children: [
  //     // Default Layout Childs
  //     { path: 'Temperature', component: Temperature, canActivate: [AuthGuard] }, // Temperature Page
  //   ]},
  { path: 'default', component: DefaultComponent, canLoad: [AuthGuard] },
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
