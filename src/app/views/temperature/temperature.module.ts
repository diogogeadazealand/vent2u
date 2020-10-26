
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Material Design
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';


// View Components
import { Temperature } from './temperature.component';
import { DashboardSlider } from './Slider/slider.component';
import { OTempComponent } from './OutsideTemp/otemp.component';
import { OTempModule } from './OutsideTemp/otemp.module';

// Shared Components
import { Presets } from './../../shared/Components/Presets/presets.component';

@NgModule({
  declarations: [
    Temperature,
    DashboardSlider,
    Presets,
    OTempComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatIconModule,
    MatSliderModule,
    OTempModule
  ]
})
export class TemperatureModule { }
