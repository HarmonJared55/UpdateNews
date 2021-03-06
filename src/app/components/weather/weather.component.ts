import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  city!:string;
  weatherType!:string;
  temp!:string;
  humidity!:string;
  iconCode!:string;

  tmrType!:string;
  tmrTempHigh!:string;
  tmrTempLow!:string;
  tmrHumidity!:string;
  tmrCode!:string;


  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeather().subscribe((res) => {
      this.city = JSON.stringify(res.name);
      this.weatherType = res.weather[0].description;
      this.temp = JSON.stringify(res.main.temp - 273.15);
      this.humidity = JSON.stringify(res.main.humidity);
      this.iconCode = res.weather[0].icon;

      this.weatherType = this.weatherType.toUpperCase();
    });

    this.weatherService.getForcast().subscribe((res) => {
      this.tmrTempLow = JSON.stringify(res.daily[0].temp.min - 273.15)
      this.tmrTempHigh = JSON.stringify(res.daily[0].temp.max - 273.15)
      this.tmrType = res.daily[0].weather[0].description;
      this.tmrHumidity = JSON.stringify(res.daily[0].humidity);
      this.tmrCode = res.daily[0].weather[0].icon;

      this.tmrType = this.tmrType.toUpperCase();
    });
  }

}
