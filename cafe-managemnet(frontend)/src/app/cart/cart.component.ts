import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  carts: any;
  public cartItemDetails: any=[];
  public grandTotal!:number;

  constructor(private cs: CartService) {}

  ngOnInit(): void {
   this.cs.getProdutc()
   .subscribe(res=>{
    this.cartItemDetails = res;
    this.grandTotal=this.cs.getTotalPrice();
   })
  }
  removeItem(item:any)
{
   this.cs.removeCartItem(item);
}


removeAllItems(){
  this.cs.removeAll();
}
}
