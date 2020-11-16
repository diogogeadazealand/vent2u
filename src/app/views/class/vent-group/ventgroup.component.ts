import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vents-group',
  templateUrl: './ventgroup.component.html',
  styleUrls: ['./ventgroup.component.css']
})
export class VentGroup implements OnInit {
  @Input() vents;
  constructor() { }

  ngOnInit() {

  }
}




