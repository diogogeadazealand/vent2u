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
import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './login/auth-gaurd.service';
import { PreventUnsavedChangesGuard } from './login/prevent-unsaved-changes-gaurd.service';


const routes: Routes = [
  {// Start Page
    path: '',
    component: LoginComponent,
    canDeactivate: [PreventUnsavedChangesGuard]
  },
  {  // Default Layout Page
    path: 'default',
    component: DefaultComponent,
    canDeactivate: [PreventUnsavedChangesGuard],
    canActivate: [AuthGuard],
    children: [
      // Default Layout Childs
      { path: 'Temperature', component: Temperature, canActivate: [AuthGuard] }, // Temperature Page
    ]},
  { path: '**', component: PageNotFoundComponent } // Wildcard 404 page
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
