import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PresetsService {

  constructor(private http: HttpClient) { }

  
  findFromUser(id){
    return this.http.get(`http://localhost:8080/vent2u/presets/user/${id}`);
  }

}
