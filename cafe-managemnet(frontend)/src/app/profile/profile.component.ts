import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user:User=new User();

  error= "";
  error1="";
  success='';
  constructor(private ps:ProfileService,private rout:Router){ }
  ngOnInit(){

  }
  userLogin()
{
  console.log(this.user);
  this.ps.profileUser(this.user).subscribe(
    data=>{
      // alert("login successful");
      this.success="Login Successful";
      // setTimeout(() => this.rout.navigate(['/home']), 3000);
    },
    error=>{
      // alert("enter correct user id and pass")
      this.error="--Login Failed--";
      this.error1="--Enter correct email id and password--";

    }
  );
}
}
