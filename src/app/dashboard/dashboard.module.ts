import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


// Components
import { DashboardComponent } from './dashboard.component';
import { TempControlComponent } from './userControls/temp-control/temp-control.component';
import { FastSettingsComponent } from './userControls/fast-settings/fast-settings.component';
import { ClimaViewComponent } from './userViews/clima-view/clima-view.component';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [TempControlComponent, DashboardComponent, FastSettingsComponent, ClimaViewComponent],
  exports: [
    TempControlComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule
  ]
})
export class DashboardModule { }
