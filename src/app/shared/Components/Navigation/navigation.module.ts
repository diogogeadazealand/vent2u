import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Navigation } from './navigation.component';

// Material Design
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [
        Navigation
    ],
    imports: [
      CommonModule,
      MatIconModule
    ]
  })
  export class NavigationModule { }