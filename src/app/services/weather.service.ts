import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  endpoint:string = 'http://api.openweathermap.org/data/2.5/weather?lat=38.065392&lon=-85.245069&appid=096a374072e33304ac0de5b67cdfe5bb';

  forcast:string = 'https://api.openweathermap.org/data/2.5/onecall?lat=38.065392&lon=-85.245069&exclude=current,minutely,hourly&appid=096a374072e33304ac0de5b67cdfe5bb'
  

  
  constructor(private http: HttpClient) { }

  public getWeather():Observable<any>{
    return this.http.get(this.endpoint);
  }
  public getForcast():Observable<any>{
    return this.http.get(this.forcast);
  }
}

//.post('localhost/usmanProject/api/web/v1/users?access-token=n-EJtZiejtz5RSVWe-U14G4kCnPWMKf0', user, { headers: this.headers })
//.post('http://localhost/usmanProject/api/web/v1/users?access-token=n-EJtZiejtz5RSVWe-U14G4kCnPWMKf0', user, { headers: this.headers })