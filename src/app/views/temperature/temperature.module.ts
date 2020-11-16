
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Material Design
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';

// View Components
import { TemperatureComponent } from './temperature.component';
import { DashboardSlider } from './Slider/slider.component';
import { OTempComponent } from './OutsideTemp/otemp.component';
import { OTempModule } from './OutsideTemp/otemp.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    TemperatureComponent,
    DashboardSlider,
    OTempComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    MatSelectModule,
    MatIconModule,
    MatSliderModule,
    MatToolbarModule,
    OTempModule
  ]
})
export class TemperatureModule { }
