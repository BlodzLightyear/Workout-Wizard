
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  card: HTMLElement | any;
  loginLink: HTMLElement | any;
  registerLink: HTMLElement | any;
  emailLogin: string = "";
  passwordLogin: string = "";
  userRegister: string = "";
  emailRegister: string = "";
  passwordRegister: string = "";
  passwordRegister2: string = "";
  checkboxRegister: boolean | any;

  constructor(public auth: AuthService) { }

  ngOnInit(): void {

  }

  goToRegister() {
    this.card = document.getElementById('divLogin');
    this.card.setAttribute("class", "card active");

  }

  goToLogin() {
    this.card = document.getElementById('divLogin');
    this.card.setAttribute("class", "card");
  }

  signInWithGoogle() {

    this.auth.googleSignIn();

  }

  signOut() {

    this.auth.signOut();
  }

  login() {

    if (this.emailLogin == "") {
      return;
    }

    if (this.passwordLogin == "") {
      return;
    }

    this.auth.login(this.emailLogin, this.passwordLogin);
    this.emailLogin = "";
    this.passwordLogin = "";

  }

  register() {

    if (this.emailRegister == "") {
      return;
    }

    if (this.passwordRegister == "") {
      return;
    }

    if (this.passwordRegister != this.passwordRegister2) {
      alert("No es la misma contraseña");
      return;
    }

    if (!this.checkboxRegister) {
      alert("Activa la casilla de Aceptar los términos y condiciones");
      return;
    }

    this.auth.register(this.emailRegister, this.passwordRegister);
    this.userRegister = "";
    this.emailRegister = "";
    this.passwordRegister = "";
    this.passwordRegister2 = "";
    this.checkboxRegister = false;

  }

}
