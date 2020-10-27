
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Material Design
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';


// Custom Components
// import { Temperature } from './temperature.component';
// import { DashboardSlider } from './Slider/slider.component';
// import { Presets } from './Presets/presets.component';
// import { OTempComponent } from './OutsideTemp/otemp.component';
// import { OTempModule } from './OutsideTemp/otemp.module';

@NgModule({
  declarations: [
    // Temperature,
    // DashboardSlider,
    // Presets,
    // OTempComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatIconModule,
    MatSliderModule,
    // OTempModule
  ]
})
export class DashboardTemperature { }
