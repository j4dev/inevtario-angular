import { Injectable } from '@angular/core';
import {Bodegas} from '../models/bodegas'

@Injectable({
  providedIn: 'root'
})
export class BodegasService {

  constructor() { }


  addBodegas(bodega: Bodegas) {
    let bodegas: Bodegas[] = [];

    if (localStorage.getItem('bodegas') === null) {
      bodegas.push(bodega);
      localStorage.setItem('bodegas', JSON.stringify(bodegas));
    } else {
      bodegas = JSON.parse(localStorage.getItem('bodegas'));
      bodegas.push(bodega);
      localStorage.setItem('bodegas', JSON.stringify(bodegas));
    }
  }
}
