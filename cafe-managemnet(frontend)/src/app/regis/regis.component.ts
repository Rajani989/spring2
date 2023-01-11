import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { User } from '../user';

@Component({
  selector: 'app-regis',
  templateUrl: './regis.component.html',
  styleUrls: ['./regis.component.css']
})
export class RegisComponent {
  user:User=new User();
  error= "";
  error1="";
  success='';
  constructor(private reg:RegisterService,private rout:Router){ }
  ngOnInit(){

  }
  userRegister()
{
  console.log(this.user);
  this.reg.regisUser(this.user).subscribe(
    data=>{
      // alert("login successful");
      this.success="Registration Successful";
      setTimeout(() => this.rout.navigate(['']), 2000);
    },
    error=>{
      // alert("enter correct user id and pass")
      this.error="--Registration Failed--";
      this.error1="--Because Email id is already regsiter--";

    }
  );
}

}
