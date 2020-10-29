import { Component, EventEmitter, Output, Input } from '@angular/core'

@Component({
    selector: 'app-temperature',
    templateUrl: './temperature.component.html',
    styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent {
    @Input() temperature : number;
    @Output() temperatureEvent = new EventEmitter<number>();
    onTempChanged(value : number) {
        this.temperatureEvent.emit(value);
    }
}
