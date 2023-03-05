import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {ProduseComponent} from "./produse/produse.component";
import {ForgotComponent} from "./forgot/forgot.component";
import {CartComponent} from "./cart/cart.component";
const routes : Routes=[
  {path: 'register', component:RegisterComponent},
  {path:'login',component: LoginComponent},
  {path:'produse',component:ProduseComponent},
  {path:'forgot',component:ForgotComponent},
  {path:'cart', component:CartComponent}]



@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingsComponents=[LoginComponent,RegisterComponent,ProduseComponent,ForgotComponent]

