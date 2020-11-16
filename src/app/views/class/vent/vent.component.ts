import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-vent',
  templateUrl: './vent.component.html'
})
export class VentComponent implements OnInit {
  @Input() vent;

  constructor() { }

  ngOnInit(): void {
  }

}

