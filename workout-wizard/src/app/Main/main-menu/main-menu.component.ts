import { Component, OnInit } from '@angular/core';
import { Database, ref, set } from '@angular/fire/database';
import { AuthService } from 'src/app/services/auth.service';
import { ErrorService } from 'src/app/services/errors.services';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
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
