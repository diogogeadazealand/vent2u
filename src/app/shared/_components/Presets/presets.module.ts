
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Presets } from './presets.component';

// Material Design
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    Presets
  ],
  exports: [
    Presets
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule
  ]
})
export class PresetsModule { }
