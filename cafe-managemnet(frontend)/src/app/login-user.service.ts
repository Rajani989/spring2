import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {
private baseurl="http://localhost:8081/user/login";
  login: any;
  constructor(private httpClient:HttpClient) { }
  loginUser(user:User):Observable<object>
  {
    console.log(user);
    return this.httpClient.post(`${this.baseurl}`,user);
  }
}
