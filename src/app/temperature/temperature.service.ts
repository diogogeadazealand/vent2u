import { Injectable } from '@angular/core';
// Import HttpClient class
import { HttpClient, HttpHeaders, HttpClientJsonpModule } from '@angular/common/http';

@Injectable()
export class WeatherService {

    
  // Inject HttpClient class
  constructor(private http: HttpClient) { }


  getData() {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=Roskilde&appid=56dac58d0d01693e552468ef3b27c1d1";
    return this.http.get(url);
  }
}