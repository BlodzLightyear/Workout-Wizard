import { Component } from '@angular/core';
import { Dieta } from '../../models/dieta';
import { GestorDatosService } from '../../services/gestor-datos.service';

@Component({
  selector: 'app-diets',
  templateUrl: './diets.component.html',
  styleUrl: './diets.component.css'
})
export class DietsComponent {
  dietsArray: Dieta[];


constructor(private gestordatosService: GestorDatosService) {
  this.dietsArray = this.gestordatosService.getDiets();
}

}
