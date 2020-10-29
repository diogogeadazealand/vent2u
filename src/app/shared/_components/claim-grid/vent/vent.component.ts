import { Component, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../../Dialog/dialog.component';


@Component({
  selector: 'vent',
  templateUrl: './vent.component.html',
  styleUrls: ['./vent.component.css']
})
export class VentComponent {

  constructor(public dialog: MatDialog) {}
  @Input() vent;

  openDialog() : void {
    let dialogRef = this.dialog.open(DialogComponent, {
      height: '400px',
      width: '600px',
    });
  }
}
