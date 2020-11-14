import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PATH } from "../config.js";

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
    return this.http.get(`${baseUrl}/${id}`);
  }

  findAllFromUser(id){
    return this.http.get(`${baseUrl}/user/${id}`);
  }

}
