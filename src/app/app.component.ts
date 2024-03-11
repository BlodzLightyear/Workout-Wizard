import { Component } from '@angular/core';
import { Database } from '@angular/fire/database';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Workout-Wizard-Fitness';
  isLogged: boolean = false;
  uidUserLogin: any;
  nombreTarea:any;


  constructor(public auth: AuthService, public database: Database) {


  }

  ngOnInit(): void {
    this.uidUserLogin = localStorage.getItem('uidtoken');
    if(this.uidUserLogin==null){
      this.isLogged = false;
    }else{
      this.isLogged = true;
    }
  }

}
