import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
api: string = 'http://localhost:3000/api/news/'
  constructor(private httpClient:HttpClient) { }

  getAllNews():Observable<any>{
    return this.httpClient.get(this.api + "all");
  }

  getLatestThree():Observable<any>{
    return this.httpClient.get(this.api + "latestThree")
  }
}
