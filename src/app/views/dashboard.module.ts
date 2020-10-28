import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';


import { MainComponent } from './main/main.component';
import { VentsComponent } from './vents/vents.component';
import { ClaimComponent } from './claim/claim.component';

import { Header } from '../shared/_components/Header/header.component';
import { NavigationComponent } from '../shared/_components/Navigation/navigation.component';
import { CelsiusPipe } from '../celsius.pipe';



@NgModule({
  declarations: [
    DashboardComponent,
    // Pages
    MainComponent,
    VentsComponent,
    ClaimComponent,
    Header,
    NavigationComponent,
    CelsiusPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
  ],
  exports: [
    CelsiusPipe
  ]
})
export class DashboardModule { }
