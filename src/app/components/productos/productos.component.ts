import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  addProduct(newNombre, newCodigo, newDescripcion, newPrecio, newCantidad) {
    return false;
  }
}
