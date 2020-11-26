// Author:
// Nikolaj Drejer
//
// Desription:
// Dashboard module that controls the UI after login


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ClaimComponent } from './claim/claim.component';

import { ClaimGridModule } from '../shared/_components/claim-grid/claim-grid.module'; 

import { HeaderComponent } from '../shared/_components/Header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { NavigationComponent } from '../shared/_components/Navigation/navigation.component';

// Pipelines
import { CelsiusPipe } from '../celsius.pipe';
import { VentControllModule } from './vent-controll/vent-controll.module';
import { ClaimModule } from './claim/claim.module';
import { RoomsService } from '../shared/_services/rooms.service';



@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    NavigationComponent,
    // Pages
    CelsiusPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    ClaimModule,
    VentControllModule
  ],
  providers: [RoomsService],
  exports: [
    CelsiusPipe
  ]
})
export class DashboardModule { }
