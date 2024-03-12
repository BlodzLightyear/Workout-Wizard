import { Injectable } from '@angular/core';
import { Dieta } from '../models/dieta';
import { DIETASEXAMPLE } from '../models/dietas.db';

@Injectable({
  providedIn: 'root'
})
export class GestorDatosService {

  dietas: Dieta[];
  ejemplosDietas: Dieta[] = DIETASEXAMPLE;


  constructor() {
    this.dietas = this.ejemplosDietas;
  }

  getDiets() {
    return this.dietas;
  }
}
