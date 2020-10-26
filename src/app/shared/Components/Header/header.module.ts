import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Header } from './header.component';

// Material Design
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    declarations: [
        Header
    ],
    imports: [
      CommonModule,
      MatIconModule,
      MatToolbarModule
    ]
  })
  export class HeaderModule { }