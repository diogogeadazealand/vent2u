import { Component } from '@angular/core';
import { OTempService } from './otemp.service';

@Component({
    selector: '<outside-temperature>',
    templateUrl: './otemp.component.html',
    styleUrls: ['./otemp.component.css'],
    providers: [OTempService]
})
export class OTemp {
    constructor(private _otempService: OTempService) {
        this._otempService.getOTempData()
        .subscribe(data => console.log(data));
    }
} 
