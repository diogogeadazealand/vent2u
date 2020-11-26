import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Vent } from 'src/app/shared/_models/vent.model';

@Component({
  selector: 'vent-controll',
  templateUrl: './vent-controll.component.html',
  styleUrls: ['./vent-controll.component.css']
})
export class VentControllComponent {

  vent: Vent;
  isVentController = true;
  @ViewChild('presets') presetComponent;

  @Output() componentAddedEvent = new EventEmitter<Component>();
  @Output() presetEvent = new EventEmitter<Preset>();
  @Output() presetsLoadedEvent = new EventEmitter<Component>();
  
  constructor() { }

  public componentAdded(component) {
   this.componentAddedEvent.emit(component);
  }

  onPresetsLoaded(event){
    this.presetsLoadedEvent.emit(event);
  }

  public onPresetChanged(preset){
    this.presetEvent.emit(preset);
  }

}
