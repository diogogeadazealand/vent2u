import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Main UI
import { NotFoundComponent } from './404/notfound.component';

// Modules TODO Should be moved to dashboard.
import { TemperatureModule } from './views/temperature/temperature.module';
import {AuthModule} from './auth/auth.module';

import { HeaderModule } from './shared/Components/Header/header.module';
import { Navigation } from './shared/Components/Navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemperatureModule,
    AuthModule,
    HeaderModule,
    Navigation
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
