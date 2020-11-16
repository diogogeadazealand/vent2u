import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-vent',
  templateUrl: './vent.component.html',
  styleUrls: ['./vent.component.css']
})
export class VentComponent implements OnInit {
  @Input() vent;

  constructor() { }

  ngOnInit(): void {
  }

}

