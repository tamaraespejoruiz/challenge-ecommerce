import { Injectable } from '@angular/core';
import { Products } from '../models/products';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  private _products: Products[] = [];
  private _productsSubjets: BehaviorSubject<Products[]> = new BehaviorSubject(this._products);
  public products : Observable<Products[]> = this._productsSubjets.asObservable();


  constructor() { }

  
  addToCart(product: Products) {
    let index = this._products.findIndex(p => p.id_producto === product.id_producto)
    if (index === -1) {
      this._products.push(product)
    }
    else {
      //this._products[index].quantity = product.quantity;
      //if (product.quantity == 0) {
      //  this._products.splice(index, 1);
      //}
    }
  }
}
