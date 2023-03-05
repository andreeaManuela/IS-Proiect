import { Component, OnInit } from '@angular/core';
import {RegisterServiceService} from "../services/register-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  constructor(private registerService: RegisterServiceService ,private  router:Router) { }

  ngOnInit(): void {
  }
  getRouteLocation(location:string)
  {
    return this.router.navigate(["./"+ location])
  }
  ForgotPass(user:any) {
    console.log(user.value)
    this.registerService.forgot(user.value).subscribe(
      {
        next:(response)=>
        {
          console.log(response)

        },
        error: (err)=> console.log(err),
        complete: ()=>console.log("complete tranfer data ")
      }
    );


  }



}
