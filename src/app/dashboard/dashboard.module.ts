import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';


import { MainComponent } from './main/main.component';
import { VentsComponent } from './vents/vents.component';
import { ClaimComponent } from './claim/claim.component';



@NgModule({
  declarations: [
    DashboardComponent,
    // Pages
    MainComponent,
    VentsComponent,
    ClaimComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class DashboardModule { }
