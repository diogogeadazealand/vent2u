import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VentsService {
  constructor(private http: HttpClient) { }
  getVentData(id) {
    const url = "http://localhost:8080/vent2u/vents/" + id;
    return this.http.get(url);
  }
}