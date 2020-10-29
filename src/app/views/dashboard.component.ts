import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  public componentAdded(temperatureChange) {
    if(temperatureChange != undefined && temperatureChange.temperatureEvent) {
      temperatureChange.temperature = this.temperature;
      temperatureChange.temperatureEvent.subscribe(
        (data) => {
          this.temperature = data;
        })
    }
  }
  temperature = 0;
  humidity = 0;
}