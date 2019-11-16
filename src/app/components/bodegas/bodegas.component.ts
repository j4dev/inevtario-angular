import { Component, OnInit } from '@angular/core';
import { BodegasService } from '../../services/bodegas.service';
import { Bodegas } from 'src/app/models/bodegas';

@Component({
  selector: 'app-bodegas',
  templateUrl: './bodegas.component.html',
  styleUrls: ['./bodegas.component.css']
})
export class BodegasComponent implements OnInit {
  bodegas: Bodegas[];
  constructor(
    public bodegasService: BodegasService
  ) { }

  ngOnInit() {
  }

  addBodega(newNombre, newCodigo, newCiudad) {
    this.bodegasService.addBodegas({
      nombre: newNombre.value,
      ciudad: newCiudad.value,
      codigo: newCodigo.value
    });
    return false;
  }

}
