import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
// @ts-ignore
window.jQuery = $;
import 'round-slider';

@Component({
  selector: 'app-temp-control',
  template: `<style>
    #tempController .rs-tooltip  {
      font-size: 60pt !important;
    }
    .sliderRotate{
      width: 100%;
      display: flex;
      justify-content: space-around;
    }

  </style>


  <div class="sliderRotate">
    <div id="tempController"></div>
  </div>

  `
})
export class TempControlComponent implements OnInit {
  constructor() {

  }

  ngOnInit(): void {
    $('#tempController').roundSlider({
      value: 18,
      radius: 180,
      tooltipFormat: tooltipVal2,
      min: 10,
      max: 28,
      sliderType: "min-range",
      startAngle: 315,
      circleShape: "pie",
      step: 1
    });
    function tooltipVal2(args) {
      return args.value + '&#176;';
    }
  }

}
