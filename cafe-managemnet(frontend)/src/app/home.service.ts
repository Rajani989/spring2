import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private baseurl="http://localhost4200/home";
  constructor(private http:HttpClient) { }
  
  getProduct(){
    return this.http.get<any>("http://localhost:8081/product/all")
    .pipe(map((res:any)=>
    {
      return res;
    }))
  }
  
}
