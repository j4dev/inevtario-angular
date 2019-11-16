import { Injectable } from '@angular/core';
import {Products} from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Products[];

  constructor() {
  }

  getProducts() {
    return this.products;
  }

  addProducts(product: Products) {
    let products: Products[] = [];
    if (localStorage.getItem('productos') === null) {
      products.push(product);
      localStorage.setItem('productos', JSON.stringify(products));
    } else {
      products = JSON.parse(localStorage.getItem('productos'));
      products.push(product);
      localStorage.setItem('productos', JSON.stringify(products));
    }
  }

}
