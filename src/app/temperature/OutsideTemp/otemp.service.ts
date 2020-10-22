import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface OutsideTemp{
    temperature: string;
}

@Injectable()
export class OTempService{
    constructor(private _http: HttpClient) {

    }
    getOTempData() :Observable<OutsideTemp> {
        return this._http.get<OutsideTemp>("https://vejr.eu/api.php?location=Roskilde&degree=C");
    }
}
