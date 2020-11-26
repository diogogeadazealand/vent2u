import { Component, EventEmitter, Output} from '@angular/core';
import { Vent } from 'src/app/shared/_models/vent.model';

@Component({
  selector: 'vent-controller',
  templateUrl: './vent-controller.component.html',
  styleUrls: ['./vent-controller.component.css']
})
export class VentControllerComponent {

  vent: Vent;
  isVentController = true;

  @Output() componentAddedEvent = new EventEmitter<Component>();
  @Output() presetsLoadedEvent = new EventEmitter<Component>();
  
  constructor() { }

  public componentAdded(component) {
   this.componentAddedEvent.emit(component);
  }
}
