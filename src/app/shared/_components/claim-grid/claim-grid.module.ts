
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClaimGridComponent } from './claim-grid.component';
import { VentComponent } from './vent/vent.component';

@NgModule({
  declarations: [
    VentComponent,
    ClaimGridComponent  
    ],
  exports: [
    VentComponent,
    ClaimGridComponent
    ],
  imports: [
    CommonModule,
    FormsModule
    ]
})
export class ClaimGridModule { }
