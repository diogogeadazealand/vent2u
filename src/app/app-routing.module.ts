import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { PageNotFoundComponent } from './notfound.component';
import { Temperature } from './main/temperature.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: Temperature },
  { path: 'Temperature', component: Temperature },
  { path: '**', component: PageNotFoundComponent } // Wildcard
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
