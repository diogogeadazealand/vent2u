import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PATH } from "../config.js";
import { Preset } from '../_models/preset.model.js';

const baseUrl = `${PATH}/presets`;

@Injectable({
  providedIn: 'root'
})
export class PresetsService {

  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get(baseUrl);
  }

  findOne(id){
    
    if(!id){
      return [];
    }

    return this.http.get(`${baseUrl}/${id}`);
  }

  findAllFromUser(id){
    
    if(!id){
      return [];
    }

    return this.http.get(`${baseUrl}/user/${id}`);
  }


}
