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

  deleteNews(_id:any):Observable<any>{
    console.log("News Service: " + _id._id);
    return this.httpClient.delete(this.api + "delete",_id);
  }

  findNewsById(_id:any):Observable<any>{

    //console.log("News Service: " + JSON.stringify(thejson));
    return this.httpClient.get(this.api + "find?_id=607de1806b65ba1b48397bcd");
  }
}
