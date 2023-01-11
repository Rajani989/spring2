import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseurl="http://localhost:8081/user/addUser";
  register: any;
  constructor(private httpClient:HttpClient) { }
  regisUser(user:User):Observable<object>
  {
    console.log(user);
    return this.httpClient.post(`${this.baseurl}`,user);
  }
}
