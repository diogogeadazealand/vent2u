import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/vent2u/vents';

@Injectable()
export class VentsService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  }

  getOne(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data) {
    return this.http.post(baseUrl, data); 
  }

  update(data) {
    return this.http.put(`${baseUrl}/`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);    
  }
}