import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'spring2';
  public totalItem:number=0;
  constructor(private cs:CartService){}
ngOnInit(): void {
  this.cs.getProdutc()
  .subscribe(res=>{
      this.totalItem=res.length;
  })
}
}
