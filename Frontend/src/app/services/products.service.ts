import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  url= "http://localhost:8080/products";

  public getAllProducts(){
    return this.http.get<any>(this.url).pipe(map((res:any)=> {
      return res;
    }));
  }

}
