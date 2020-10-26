
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Material Design
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';

// View Components
import { Temperature } from './temperature.component';
import { DashboardSlider } from './Slider/slider.component';
import { OTempComponent } from './OutsideTemp/otemp.component';
import { OTempModule } from './OutsideTemp/otemp.module';

// Shared Components
import { Presets } from '../../shared/_components/Presets/presets.component';
import { Header } from '../../shared/_components/Header/header.component';
import { Navigation } from '../../shared/_components/Navigation/navigation.component';

@NgModule({
  declarations: [
    Temperature,
    DashboardSlider,
    Presets,
    OTempComponent,
    Header,
    Navigation
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatIconModule,
    MatSliderModule,
    MatToolbarModule,
    OTempModule
  ]
})
export class TemperatureModule { }
