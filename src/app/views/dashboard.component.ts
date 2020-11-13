import { Component, Output } from '@angular/core';
// import { VentService } from '../shared/_services/vent.service';
import { VentsService } from '../shared/_services/Vents/vents.service';
import {UserMockService as UserService } from "../shared/_services/user-mock.service";
import { User } from '../shared/_models/user.model';
import { Preset } from '../shared/_models/preset.model';
import { PresetsService } from '../shared/_services/presets.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  providers: [VentsService]
})
export class DashboardComponent {

  @Output() user: User = null;
  @Output() presets = [];

  constructor(
    private _ventService: VentsService,
    private _userService: UserService,
    private _presetsService: PresetsService
  ) {}

  temperature = null;
  humidity = null;

  component = null;
  // This id parameter is a placeholder until the session gives us the id
  id = 2;

  ngOnInit() {

    this.user = this._userService.findOne(1);
    
    this._ventService.getOne(this.id).subscribe(data => {
      this.temperature = data[0].temperature;
      this.humidity = data[0].humidity;
      if(this.component.temperature !== undefined) {
        this.component.temperature = data[0].temperature;
      }
      else if(this.component.humidity !== undefined) {
        this.component.humidity = data[0].humidity;
      }
    });
    
    this._presetsService.findAllFromUser(this.user.ID).subscribe(data => {
      this.presets = data;
    });

  }

  public componentAdded(component) {
    if(component != undefined) {
      this.component = component;
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