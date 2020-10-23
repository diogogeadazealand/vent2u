import { Component } from '@angular/core';
import { VentService } from './vent.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SemesterProject';
  public vents;

  constructor(private _ventService: VentService){}

  ngOnInit(){
    this.vents = this._ventService.GetVents();
    console.log(this.vents);
  }



}
