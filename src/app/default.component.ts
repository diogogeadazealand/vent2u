import { Component } from '@angular/core';

@Component({
  selector: 'app-default',
  template: `
    <div class="layout">
    <mat-toolbar>
      <span id="logo" routerLink="Dashboard">Vent<b style="color: green">2</b>u</span>
      <span><mat-icon>menu</mat-icon></span>
    </mat-toolbar>
    <router-outlet></router-outlet>
    <footer>
      <nav>
        <ul>
          <li routerLink="Temperature">23&#176; Temp</li>
          <li routerLink="**">53% Humidity</li>
          <li routerLink="">Settings
          </li>
        </ul>
      </nav>
    </footer>
  </div>
  `
})
export class DefaultComponent {
  title = 'Vent2u';
}
