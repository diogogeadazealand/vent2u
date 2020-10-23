import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Design
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

// Custom Views
import { PageNotFoundComponent } from './notfound.component';

// Modules
import { DashboardTemperature } from './main/temperature.module';
import { ClaimGridComponent } from './claim-grid/claim-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ClaimGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    DashboardTemperature
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
