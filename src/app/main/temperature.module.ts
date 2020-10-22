  
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Material Design
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

// Custom Components
import { Temperature } from './temperature.component';



@NgModule({
  declarations: [
    Temperature
    ],
  exports: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
  ]
})
export class DashboardTemperature { }