import { Component, OnInit } from '@angular/core';
import { StudentsService } from './students/students.service';
import { VentsService } from '../../shared/_services/Vents/vents.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
students;
vents;
  constructor(private _StudentService:StudentsService, private _VentsService:VentsService) { }

  ngOnInit (): void {
    // Hardcoded ID until room is set by user
    this.vents = this._VentsService.getFromRoom(2);
    this.students = this._StudentService.getStudents();
  }
}
