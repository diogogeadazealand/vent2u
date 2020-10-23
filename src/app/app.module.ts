import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Main UI
import { NotFoundComponent } from './404/notfound.component';
import { DashboardModule } from './dashboard/dashboard.module';

// Modules TODO Should be moved to dashboard.
import { DashboardTemperature } from './temperature/temperature.module';
import {AuthModule} from './auth/auth.module';
import {ClassModule} from './class/class.module';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardTemperature,
    DashboardModule,
    AuthModule,
    ClassModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
