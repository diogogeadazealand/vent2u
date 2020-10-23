import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassComponent } from '../class/class.component';
import { StudentComponent } from '../student/student.component';
import { StudentsComponent } from '../students/students.component';



@NgModule({
  declarations: [ClassComponent, StudentComponent, StudentsComponent], 
  imports: [
    CommonModule
  ],
  exports: [ ClassComponent ]
})
export class ClassModule { }
