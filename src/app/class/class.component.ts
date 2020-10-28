import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
students;
  constructor(private _StudentService:StudentsService) { }

  ngOnInit (): void {
    this.students = this._StudentService.getStudents();
  }
}
