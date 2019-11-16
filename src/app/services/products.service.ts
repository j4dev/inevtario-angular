import { Injectable } from '@angular/core';
import {Products} from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Products[];

  constructor() {
    this.products = [];
  }

  getProducts() {
    return this.products;
  }

  addProducts(products) {
    this.products.push(products);
  }

}
