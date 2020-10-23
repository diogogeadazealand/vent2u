import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';


import { MainComponent } from './main/main.component';
import { VentsComponent } from './vents/vents.component';
import { ClaimComponent } from './claim/claim.component';



@NgModule({
  declarations: [
    DashboardComponent,
    MainComponent,
    VentsComponent,
    ClaimComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    MatToolbarModule
  ]
})
export class DashboardModule { }
