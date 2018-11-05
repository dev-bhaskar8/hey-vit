import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {
  Myweather:any;
  constructor(private data: WeatherService) { }

  ngOnInit() {
    this.data.getWeather().subscribe(data => {
      this.Myweather =data;
      console.log(this.Myweather);
    }
    );

    
  }

}
