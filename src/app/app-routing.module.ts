import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { PageNotFoundComponent } from './notfound.component';
import { Temperature } from './main/temperature.component';
import { AppComponent } from './app.component';
import { ClassComponent } from './class/class.component';

const routes: Routes = [
  { path: '', component: Temperature },
  { path: 'Temperature', component: Temperature },
  { path: 'Classroom', component: ClassComponent },
  { path: '**', component: PageNotFoundComponent } // Wildcard

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
