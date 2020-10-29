import { Component, Output, EventEmitter, Input } from '@angular/core';
@Component({
    selector: 'temp-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css']
})
export class DashboardSlider {
    @Input() temperature : number;
    @Output() temperatureEvent = new EventEmitter<number>();

    onTempChanged(value : number) {
        this.temperatureEvent.emit(value);
    }
}
