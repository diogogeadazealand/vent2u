  
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Material Design
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';


// Custom Components
import { Temperature } from './temperature.component';
import { DashboardSlider } from './Slider/slider.component';


@NgModule({
  declarations: [
    Temperature,
    DashboardSlider
    ],
  exports: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
    MatSliderModule
  ]
})
export class DashboardTemperature { }