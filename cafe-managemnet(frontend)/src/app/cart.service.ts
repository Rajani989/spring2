import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItem:any=[];
  public productList=new BehaviorSubject<any>([]);
  constructor(private http:HttpClient) { }

  getProdutc(){
    return this.productList.asObservable();
  }
  
  setProduct(product:any){
    this.cartItem.push(...product);
    this.productList.next(product);
  }

  addToCart(product:any){
    this.cartItem.push(product);
    this.productList.next(this.cartItem);
    this.getTotalPrice();
    console.log(this.cartItem);
  }

  getTotalPrice():number{
    let total=0;
    this.cartItem.map((a:any)=>{
      total+=a.total;
    })
    return total;
  }


// this method is used to remove 1 item from the cart
  removeCartItem(product:any){
    this.cartItem.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cartItem.splice(index,1);
      }
    })
    this.productList.next(this.cartItem)
  }

  removeAll(){
    this.cartItem=[];
    this.productList.next(this.cartItem);
    
  }
}
