import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Products } from '../../models/products';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  products: Products[];

  constructor(
    public productsService: ProductsService
  ) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }
  addProduct(newNombre, newCodigo, newDescripcion, newPrecio, newCantidad) {
    this.productsService.addProducts({
      nombre: newNombre.value,
      codigo: newCodigo.value,
      descripcion: newDescripcion.value,
      precio: newPrecio.value,
      cantidad: newCantidad.value
    });
    return false;
  }


}
