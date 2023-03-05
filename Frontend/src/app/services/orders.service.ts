import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  url="http://localhost:8080/";

  public getSelectedProductsList(produse:any){
    return this.http.post(this.url+'orders', produse);
  }
}
