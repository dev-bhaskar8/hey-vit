import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let API_URL  = 'http://api.openweathermap.org/data/2.5/weather?q=Vellore,in&units=metric';
let API_KEY = '979664fcf8d065bb69ea5674eb312b27';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(){
    return this.http.get(API_URL+'&APPID='+API_KEY)
  }

}
