import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassComponent } from '../class/class.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';

import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './student/student.component';
import { StudentsService } from './students/students.service';

import { ClaimGridModule } from '../../shared/_components/claim-grid/claim-grid.module';

import { VentService } from '../../shared/_services/vent.service';
import { VentGroup } from './vent-group/ventgroup.component';
import { VentComponent } from './vent/vent.component';

@NgModule({
  declarations: [ClassComponent, StudentComponent, StudentsComponent, VentComponent, VentGroup ], 
  imports: [
    CommonModule, 
    MatButtonModule, 
    ClaimGridModule,
    MatTabsModule
  ],
  providers: [ StudentsService, VentService ],
  exports: [ ClassComponent ]
})
export class ClassModule { }
