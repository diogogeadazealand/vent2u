import { Component } from '@angular/core';
// import { VentService } from '../shared/_services/vent.service';
import { VentsService } from '../shared/_services/Vents/vents.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  providers: [VentsService]
})
export class DashboardComponent {
  public componentAdded(component) {
    if(component != undefined) {
      if(component.temperatureEvent) {
      component.temperature = this.temperature;
      component.temperatureEvent.subscribe(
        (data) => {
          this.temperature = data;
        })
      }
      else if(component.humidityEvent) {
        component.humidity = this.humidity;
        component.humidityEvent.subscribe(
          (data) => {
            this.humidity = data;
          }
        )
      }
    }
  }
  temperature = null;
  humidity = null;
  
  isLoading = true;
  constructor(private _ventService: VentsService) {
  }

  ngOnInit() {
    // This id parameter is a placeholder until the session gives us the id
    this._ventService.getVentData(2).subscribe(data => {
        this.isLoading = false;
        let vent = data;
        this.temperature = vent[0].temperature;
        this.humidity = vent[0].humidity;
    });
  }
}