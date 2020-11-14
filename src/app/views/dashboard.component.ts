import {
  Component,
  OnInit,
  Output
} from '@angular/core';

import { VentsService } from '../shared/_services/Vents/vents.service';
import { UserMockService as UserService } from "../shared/_services/user-mock.service";
import { PresetsService } from '../shared/_services/presets.service';

import { User } from '../shared/_models/user.model';
import { Vent } from '../shared/_models/vent.model';
import { Preset } from '../shared/_models/preset.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  providers: [VentsService]
})


export class DashboardComponent implements OnInit {

  @Output() user: User = new User();
  @Output() vent: Vent = new Vent();

  component = null;
  // This id parameter is a placeholder until the session gives us the id
  id = 2;


  constructor(
    private _ventService: VentsService,
    private _userService: UserService
  ) {}

  ngOnInit() {

    this.user = this._userService.findOne(1);

    this._ventService.getOne(this.id).subscribe(data => {

      this.vent.set(data[0]);

      this.SetTemperature(); //update temperature in the gui
      this.SetHumidity(); // update humidity i nthe gui

    });

  }

  private SetTemperature(val ? : Number) {

    this.vent.temperature = val || this.vent.temperature;

    if (this.component.temperatureEvent !== undefined) {
      this.component.temperature = this.vent.temperature;
    }

    if(val){
      this.updateTemperature(this.vent.temperature);
    }
  }

  private SetHumidity(val ? : Number) {
   
    this.vent.humidity = val || this.vent.humidity;

    if (this.component.humidityEvent !== undefined) {//updates interface
      this.component.humidity = this.vent.humidity;
    }

    if(val != undefined){//updates database
      this.updateHumidity(this.vent.humidity);
    }
  }

  public componentAdded(component) {
    if (component != undefined) {
      this.component = component;
      if (component.temperatureEvent) {

        this.SetTemperature();

        component.temperatureEvent.subscribe(
          (data) => {
            this.SetTemperature(data);
          });

      } else if (component.humidityEvent) {

        component.humidityEvent.subscribe(
          (data) => {
            this.SetHumidity(data);
          }
        )
      }
    }
  }

  updateTemperature(temperature) {
    let data = {
      ID: this.vent.ID,
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

  updateHumidity(humidity) {
    let data = {
      ID: this.vent.ID,
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

  updatePreset(preset) {

    this.vent.humidity = preset.humidity;
    this.vent.temperature = preset.temperature;
    this.vent.preset_id = preset.ID;

    this.SetTemperature();
    this.SetHumidity();

    this._ventService.update(this.vent).subscribe(
      response => {
        console.log("Preset changed");
      },
      error => {
        console.log(error);
      });
  }
}
