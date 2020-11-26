import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

// Pipelines
import { TemperatureModule } from '../temperature/temperature.module';
import { HumidityModule } from '../humidity/humidity.module';
import { VentControllerComponent } from './vent-controller.component';



@NgModule({
  declarations: [
    VentControllerComponent
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
export class VentControllerModule { }
