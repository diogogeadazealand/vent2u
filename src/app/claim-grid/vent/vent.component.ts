import { Component, Input } from '@angular/core';

@Component({
  selector: 'vent',
  templateUrl: './vent.component.html',
  styleUrls: ['./vent.component.css']
})
export class VentComponent {

  @Input() vent;

}
