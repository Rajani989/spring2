import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisComponent } from './regis/regis.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'cart',component:CartComponent
  },
  {
    path:'profile',component:ProfileComponent
  },
  {
    path:'regi',component:RegisComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
