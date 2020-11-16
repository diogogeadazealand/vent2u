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
import { Room } from '../shared/_models/room.model';
import { Classroom } from '../shared/_models/class.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  providers: [VentsService]
})


export class DashboardComponent implements OnInit {

  @Output() user: User = new User();
  @Output() vent: Vent = new Vent();

  temperatureComponent = null;
  humidityComponent = null;
  presetsComponent = null;
  ventControllComponent = null;
  claimComponent = null;

  constructor(
    private _ventService: VentsService,
    private _userService: UserService
  ) {}

  ngOnInit() {

    this.user = this._userService.findOne(6);

    if(this.claimComponent) this.claimComponent.userId = this.user.ID;

    this._ventService.getFromUser(this.user.ID).subscribe(data => {

      if(!data) return;//the user doesn't have any vent claimed

      this.vent.set(data);
      this.UpdateUi();
    });

  }

  private SetTemperature(val ? : Number) {

    this.vent.temperature = val || this.vent.temperature;

    if (this.temperatureComponent != undefined) {
      this.temperatureComponent.temperature = this.vent.temperature;
      this.temperatureComponent.scrollToTemperature();
    }

    if(val){
      this.updateTemperature(this.vent.temperature);
    }
  }

  private SetHumidity(val ? : Number) {
   
    this.vent.humidity = val || this.vent.humidity;

    if (this.humidityComponent != undefined) {//updates interface
      this.humidityComponent.humidity = this.vent.humidity;
    }

    if(val != undefined){//updates database
      this.updateHumidity(this.vent.humidity);
    }
  }

  private SetPreset(preset ?){

    this.vent.preset_id = (preset) ? preset.ID : this.vent.preset_id;

    if (this.presetsComponent != undefined) {//updates interface
      this.presetsComponent.ScrollToIndex(this.vent.preset_id);
    }

    if(preset != undefined){//updates database
      this.updatePreset(preset);
    }
  }

  public componentAdded(component) {

    if(component != undefined){
        
      if(component.isVentController){
        this.ventControllComponent = component;
        this.ventControllComponent.vent = this.vent;
  
        this.ventControllComponent.presetsLoadedEvent.subscribe( (component) => {
            this.presetsComponent = component;

            if(this.vent.preset_id) {
              this.presetsComponent.currentPresetId = this.vent.preset_id;
            }

            this.presetsComponent.SetUser(this.user.ID);
        });
        
          this.ventControllComponent.presetEvent.subscribe( preset => {
            this.SetPreset(preset);
          });

        this.ventControllComponent.componentAddedEvent.subscribe(component => {
          this.updateComponents(component);
        });
      } else this.updateComponents(component);

    }

  }

  updateTemperature(temperature) {
    let data = {
      ID: this.vent.ID,
      temperature: temperature
    }
    this.vent.temperature = temperature;
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

  getVent(vent){

    this._ventService.getOne(vent.ID).subscribe(data => {

      if(!data) return;//the user doesn't have any vent claimed

      this.vent.set(data);
      this.UpdateUi();
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

    updateComponents(component){

      if (component.temperatureEvent) {
        this.temperatureComponent = component;

        this.temperatureComponent.temperatureEvent.subscribe( temperature => {
          this.updateTemperature(temperature);
        });

        if(this.vent.temperature){
          this.temperatureComponent.temperature = this.vent.temperature;
          this.temperatureComponent.scrollToTemperature();
        }

      } else if(component.humidityEvent){
        this.humidityComponent = component;
        this.humidityComponent.humidityEvent.subscribe( humidity => {
          this.updateHumidity(humidity);
        });
      }else if(component.claimEvent){

        this.claimComponent = component;
        this.claimComponent.currentVent = this.vent;
        this.claimComponent.userId = this.user.ID;
        this.claimComponent.claimEvent.subscribe( vent => {
          this.getVent(vent);
        });
      }
    }

    UpdateUi(){
      this.SetPreset();
      this.SetTemperature(); //update temperature in the gui
      this.SetHumidity(); // update humidity i nthe gui
    }
}
