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
import { MatButtonModule } from '@angular/material/button';


// Custom Views
import { PageNotFoundComponent } from './notfound.component';

// Modules
import { ClaimGridComponent } from './claim-grid/claim-grid.component';
import { DashboardTemperature } from './temperature/temperature.module';
import { VentService } from './vent.service';
import { VentComponent } from './claim-grid/vent/vent.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ClaimGridComponent,
    VentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    DashboardTemperature,
    MatButtonModule
  ],
  providers: [VentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
