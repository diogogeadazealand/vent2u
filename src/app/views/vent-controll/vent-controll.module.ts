import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

// Pipelines
import { TemperatureModule } from '../temperature/temperature.module';
import { HumidityModule } from '../humidity/humidity.module';
import { VentControllComponent } from './vent-controll.component';



@NgModule({
  declarations: [
    VentControllComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule,
    MatIconModule,
    TemperatureModule,
    HumidityModule
  ],
  exports: [
  ]
})
export class VentControllModule { }
