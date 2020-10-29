
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from '../../_components/Dialog/dialog.component';

import { ClaimGridComponent } from './claim-grid.component';
import { VentComponent } from './vent/vent.component';

@NgModule({
  declarations: [
    VentComponent,
    ClaimGridComponent,
    DialogComponent  
    ],
  exports: [
    VentComponent,
    ClaimGridComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule
    ]
})
export class ClaimGridModule { }
