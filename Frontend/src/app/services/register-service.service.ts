import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private http: HttpClient) {
  }
  url="http://localhost:8080/";
  public registerUser(user: any) {
    return this.http.post(this.url + 'register', user)
  }

  public loginUser(user:any) {
    return this.http.post(this.url+'login',user );
  }
  public  forgot (user:any) {
    return this.http.post(this.url+'forgot',user);
  }

  public getProducts (category:string, description: string, imageurl: string, name:string, price:string){
    return this.http.get(this.url+'produse/'+category+'/'+description+'/'+imageurl+'/'+name+'/'+price);
  }

}
