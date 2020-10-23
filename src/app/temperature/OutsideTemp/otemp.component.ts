import { Component } from '@angular/core';
import { WeatherService } from '../../weather.service';

@Component({
    selector: 'outside-temperature',
    template: `
    <div class="outside-temp">
        <span *ngIf="isLoading">Getting data...</span>
        <span *ngIf="!isLoading">Outside {{ temperature }}&#176;C</span>
    </div>`,
    styleUrls: ['./otemp.component.css'],
    providers: [WeatherService]
})
export class OTempComponent {
    temperature = 0;
    isLoading = true;
    constructor(private _otempService: WeatherService) {
    }
    
    ngOnInit() {
        this._otempService.getWeatherData()
        .subscribe(data => {
            this.isLoading = false;
            let weather = data;
            // We get information in Kelvin, we substract here to get Celsius
            this.temperature = weather['main'].temp - 273.15;
        })
    }
} 
