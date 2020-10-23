import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassComponent } from '../class/class.component';
import { StudentComponent } from '../student/student.component';
import { StudentsComponent } from '../students/students.component';
import { MatButtonModule } from '@angular/material/button';
import { StudentsService } from '../students.service';




@NgModule({
  declarations: [ClassComponent, StudentComponent, StudentsComponent,], 
  imports: [
    CommonModule, MatButtonModule
  ],
  providers: [ StudentsService ],
  exports: [ ClassComponent ]
})
export class ClassModule { }
