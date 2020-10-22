// Notes
//
// The main route is only used to chose between Login and Default.
// Other Routes should be used with outlet[1-100] as and example
// { path: "contacts", component: ContactListComponent, outlet: "outlet1" }
// even tho we must remember to put auth-guard on all pages.

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { DefaultComponent } from './default.component';
import { PageNotFoundComponent } from './notfound.component';
import { Temperature } from './main/temperature.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';

// import { PreventUnsavedChangesGuard } from './login/prevent-unsaved-changes-gaurd.service';


const routes: Routes = [
  // {// Start Page
  //   path: '',
  //   component: LoginComponent
  // },
  // {  // Default Layout Page
  //   path: 'default',
  //   component: DefaultComponent,
  //   canDeactivate: [],
  //   canActivate: [AuthGuard],
  //   children: [
  //     // Default Layout Childs
  //     { path: 'Temperature', component: Temperature, canActivate: [AuthGuard] }, // Temperature Page
  //   ]},
  // { path: '**', component: PageNotFoundComponent }, // Wildcard 404 page


  {
    path: 'default',
    component: DefaultComponent,
    canLoad: [AuthGuard]
  },

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
