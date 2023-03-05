import { Injectable } from '@angular/core';
import {BehaviorSubject, map} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private cartItemList : any =[]
  private productList = new BehaviorSubject<any>([]);
  private done:boolean=false;
  constructor(private http: HttpClient) {}
  getcartItemList()
  {
    return this.cartItemList
  }
  getProducts(){
    return this.productList.asObservable();
  }

  addtoCart(product : any){
    if(product.quantity>0) {
      product.quantity = product.quantity - 1;

      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
      this.TotalPrice();
      console.log(this.cartItemList)
    }
  }
  TotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal =grandTotal+a.price
    })
    return grandTotal;
  }
  url="http://localhost:8080/";
  removeCartItem(product: any){
    let index=this.cartItemList.indexOf(product)
    this.done=false
    if(index>=0)
    {
      this.cartItemList.splice(index,1)
    }
    this.productList.next(this.cartItemList);
  }
  removeAll(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
  public getItemmsSelected(productsSelected:any) {
    return this.http.post(this.url+'items',productsSelected );
  }


}
