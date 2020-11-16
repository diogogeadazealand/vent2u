import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Vent } from 'src/app/shared/_models/vent.model';
import { DialogComponent } from '../../Dialog/dialog.component';


@Component({
  selector: 'vent',
  templateUrl: './vent.component.html',
  styleUrls: ['./vent.component.css']
})
export class VentComponent {

  @Input() vent;
  @Input() currentVentId;
  @Output() ventClaimedEvent = new EventEmitter();
  @Output() ventUnclaimedEvent = new EventEmitter();

  claim(e) : void {
    this.ventClaimedEvent.emit(this.vent);
  }
  
  unclaim(e){
    this.ventUnclaimedEvent.emit();
  }

  isCurrent(){
    if(this.vent.ID == this.currentVentId) return "selected";
    return "";
  }

}
