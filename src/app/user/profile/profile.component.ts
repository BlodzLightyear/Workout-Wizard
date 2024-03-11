import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Database, ref, set } from '@angular/fire/database';
import { ErrorService } from '../../services/errors.services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  uidUserLogin: any;
  c: any
  nombreTarea:any;

  constructor(public auth: AuthService, public database: Database) {


  }

  ngOnInit(): void {

    this.uidUserLogin = localStorage.getItem('uidtoken');
    console.log(this.uidUserLogin);
  }

  signOut() {
    this.auth.signOut();
    window.location.reload();
  }


  //Creación de tarjetas
  newCard() {

    this.c = "Hola";
    this.nombreTarea = "segunda"
    //Actualizamos la bbdd.
    set(ref(this.database, 'users/' + this.uidUserLogin + '/Tareas' + '/'+ this.nombreTarea), {
      DescripcionTarea: this.c,
      HoraInicio: this.c,
      HoraFinal: this.c,
      DiaInicio: this.c,
      DiaFinal: this.c,
      Estado: this.c
    }).then(() => {
      console.log('Datos cargados en la bbdd')
    }).catch(function (error) {
      alert(ErrorService.convertMessage(error['code']));
    });
  }

  cardReader() {

  }

  cardDestroyer() {

  }
}
