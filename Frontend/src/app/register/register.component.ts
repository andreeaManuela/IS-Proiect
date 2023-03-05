import { Component, OnInit } from '@angular/core';

import {RegisterServiceService} from "../services/register-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private registerService: RegisterServiceService, private router:Router ) { }
  ngOnInit(): void {
  }


  register(registerForm: any) {
    //registerForm contine toate datele sub forma unei variabile de grup ea nu are valoare
    ///ca sa accesez valorile rebuie sa trimit ca parametru trebuie sa apelez values
    this.registerService.registerUser(registerForm.value).subscribe(
      {
        ///aici se afiseaza numaa in consola de frontend acolo la inspect ce a introdus utilizatorul nu are treaba cu backend
        //next:(response)=>console.log(response),
        error: (err)=> console.log(err),
        complete: ()=>console.log("complete")

      });
    this.router.navigate(['./login']);

  }
        }


