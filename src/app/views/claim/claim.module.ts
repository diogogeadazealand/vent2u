import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ClaimGridModule } from '../../shared/_components/claim-grid/claim-grid.module';
import { VentService } from '../../shared/_services/vent.service';
import { StudentsService } from '../class/students/students.service';
import { ClaimComponent } from './claim.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [ ClaimComponent], 
  imports: [
    CommonModule, 
    MatButtonModule, 
    ClaimGridModule
  ],
  providers: [ StudentsService, VentService ],
  exports: [ ]
})
export class ClaimModule { }
