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


import { MainComponent } from './main/main.component';
import { VentsComponent } from './vents/vents.component';
import { ClaimComponent } from './claim/claim.component';

import { HeaderComponent } from '../shared/_components/Header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { NavigationComponent } from '../shared/_components/Navigation/navigation.component';

// Pipelines
import { CelsiusPipe } from '../celsius.pipe';



@NgModule({
  declarations: [
    DashboardComponent,
    // Pages
    MainComponent,
    VentsComponent,
    ClaimComponent,
    HeaderComponent,
    NavigationComponent,
    CelsiusPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule
  ],
  exports: [
    CelsiusPipe
  ]
})
export class DashboardModule { }
