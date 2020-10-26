import { Input,Component } from '@angular/core';
import { Router } from '@angular/router';
import {CelsiusPipe} from '../celsius.pipe';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
@Input() temperature=0;
@Input() humidity=0;
}
