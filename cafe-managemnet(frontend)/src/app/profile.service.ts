import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private baseurl="http://localhost:8081/user/profile";
  register: any;
  constructor(private httpClient:HttpClient) { }
  profileUser(user:User):Observable<object>
  {
    console.log(user);
    return this.httpClient.post(`${this.baseurl}`,user);
  }
}
