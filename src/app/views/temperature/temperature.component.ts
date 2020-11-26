import { Component, EventEmitter, Output, Input, ViewChild } from '@angular/core'

@Component({
    selector: 'app-temperature',
    templateUrl: './temperature.component.html',
    styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent {

    @ViewChild("slider") slider;
    @Input() temperature : number;
    @Output() temperatureEvent = new EventEmitter<number>();
    ventId;

    onTempChanged(value : number) {
        this.temperatureEvent.emit(value);
    }

    public scrollToTemperature(){
        if(this.slider){
            this.slider.temperature = this.temperature;
            this.slider.scrollToTemperature();
        }
    }

    onSliderLoaded(){
        if(this.temperature){
            this.slider.scrollToTemperature();
        }
    }
}
