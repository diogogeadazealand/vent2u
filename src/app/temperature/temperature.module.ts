  
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Material Design
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';


// Custom Components
import { Temperature } from './temperature.component';
import { DashboardSlider } from './Slider/slider.component';
import { Presets } from './Presets/presets.component';


@NgModule({
  declarations: [
    Temperature,
    DashboardSlider,
    Presets
    ],
  exports: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatIconModule,
    MatSliderModule
  ]
})
export class DashboardTemperature { }