import { Component } from '@angular/core';
// import { VentService } from '../shared/_services/vent.service';
import { VentsService } from '../shared/_services/Vents/vents.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  providers: [VentsService]
})
export class DashboardComponent {
  constructor(
    private _ventService: VentsService
  ) {}

  temperature = null;
  humidity = null;
  
  // This id parameter is a placeholder until the session gives us the id
  id = 2;

  ngOnInit() {
    this._ventService.getOne(this.id).subscribe(data => {
        this.temperature = data[0].temperature;
        this.humidity = data[0].humidity;
    });
  }

  public componentAdded(component) {
    if(component != undefined) {
      if(component.temperatureEvent) {
      component.temperature = this.temperature;
      component.temperatureEvent.subscribe(
        (data) => {
          this.temperature = data;
          this.updateTemperature(this.id, data)
        })
      }
      else if(component.humidityEvent) {
        component.humidity = this.humidity;
        component.humidityEvent.subscribe(
          (data) => {
            this.humidity = data;
            this.updateHumidity(this.id, data)
          }
        )
      }
    }
  }

  updateTemperature(id, temperature) {
    let data = {
      ID: id,
      temperature: temperature
    }
    this._ventService.update(data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  } 
  updateHumidity(id, humidity) {
    let data = {
      ID: id,
      humidity: humidity
    }
    this._ventService.update(data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  } 
}