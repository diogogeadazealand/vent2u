  
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OTemp } from './otemp.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
        OTemp
    ],
  exports: [
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  bootstrap: [OTemp]
})
export class OTempModule { }