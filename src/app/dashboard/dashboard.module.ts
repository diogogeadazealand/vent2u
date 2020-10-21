import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


// Components
import { DashboardComponent } from './dashboard.component';
import { TempControlComponent } from './userControls/temp-control/temp-control.component';


@NgModule({
  declarations: [TempControlComponent, DashboardComponent],
  exports: [
    TempControlComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DashboardModule { }
