import { Component, OnInit } from '@angular/core';
import {RegisterServiceService} from "../services/register-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


  constructor(private registerService: RegisterServiceService ,private  router:Router) { }

  ngOnInit(): void {}
  getRouteLocation(location:string)
  {
    return this.router.navigate(["./"+ location])
  }

  userLogin(loginForm:any) {
    this.registerService.loginUser(loginForm.value).subscribe(
      ///chestia asta am scris-o ca sa pot vedea in inspect in frontends ce se introduce in textfield
      {
        next:(response)=>
        {console.log(response)//datele se afiseaza in consola de inspect
          if( response==null) { ///daca raspunsul la cautarea in bd a userului este null
            //navighez la pagina de register
            this.router.navigate(['./register']);
          }
          else
          {
            this.router.navigate(['./produse']);
          }
        },
        error: (err)=> console.log(err),//afiseaza in frontend o erroare daca ceva date nu sunt ok
        complete: ()=>console.log("complete login")
      }
    );


  }

}
