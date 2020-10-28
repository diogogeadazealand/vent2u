import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassComponent } from '../class/class.component';
import { StudentComponent } from './student/student.component';
import { StudentsComponent } from './students/students.component';
import { MatButtonModule } from '@angular/material/button';
import { StudentsService } from './students/students.service';
import { ClaimGridComponent } from '../shared/_components/claim-grid/claim-grid.component';
import { VentComponent } from '../shared/_components/claim-grid/vent/vent.component';
import { VentService } from '../shared/_services/vent.service';


@NgModule({
  declarations: [ClassComponent, StudentComponent, StudentsComponent, ClaimGridComponent, VentComponent ], 
  imports: [
    CommonModule, MatButtonModule, 
  ],
  providers: [ StudentsService, VentService ],
  exports: [ ClassComponent ]
})
export class ClassModule { }
