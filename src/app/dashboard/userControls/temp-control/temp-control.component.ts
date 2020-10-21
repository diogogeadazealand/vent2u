import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
window.jQuery = $;
import 'round-slider';

@Component({
  selector: 'app-temp-control',
  template: `<style>
    #slider1{
      position: absolute;
    }
  </style>
  <p>temp-control works!</p>
  <div id="slider1"></div>
  `
})
export class TempControlComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    $('#slider1').roundSlider({
      value: 45
    });
  }

}
