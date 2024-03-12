import { Comida } from "./comida";

export class Dieta{
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  comidas : Comida[];
  autor: number;


  constructor(pId: number, pNombre: string, pDescripcion: string, pImagen: string, pComidas: Comida[], pAutor: number){
    this.id = pId;
    this.nombre = pNombre;
    this.descripcion = pDescripcion;
    this.imagen = pImagen;
    this.comidas = pComidas;
    this.autor = pAutor;
  }
}
