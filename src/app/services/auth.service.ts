import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api: string = 'http://localhost:3000/api/users';
  subject: Subject<string> = new Subject<string>();
  constructor(private httpClient: HttpClient) { }

  getUserDetails(email: string): Observable<any> {
    return this.httpClient.get(this.api + '?email=' + email)

  }

  createUser(register: any): Observable<any> {
    return this.httpClient.get(this.api + '/register', register);
  }

  login(login: any): Observable<any> {
    return this.httpClient.post(this.api + '/login', login);
  }

}
