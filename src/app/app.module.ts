import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Main Dashboard --TEMPERATURE--
import { DashboardMain } from './main/main.component';
import { Login } from './login/login.component';

// Material Design
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';

// Custom Inputs
import { CircularSliderModule } from 'angular-circular-slider';

@NgModule({
  declarations: [
    AppComponent,
    DashboardMain,
    Login
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    CircularSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
