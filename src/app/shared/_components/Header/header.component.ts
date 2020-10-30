// Author:
// Nikolaj Drejer
//
// Date: 28.10.2020
//
// Desription:
// Header component which hold the Topnav and the burger menu

import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LogoutComponent } from './logout/logout.component';
import { NotInUseModalComponent } from '../not-in-use-modal/not-in-use-modal.component';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})
export class HeaderComponent {
  user = 'Username';

  @Input() temperature : number;
  @Input() humidity : number;
  
  constructor(public dialog: MatDialog) {
  }

  Logout(): void {
    this.dialog.open(LogoutComponent);
  }
  NotInUseModal(): void {
    this.dialog.open(NotInUseModalComponent);
  }
}
