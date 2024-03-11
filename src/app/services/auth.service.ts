import { Injectable } from "@angular/core";
import { GoogleAuthProvider } from "@angular/fire/auth";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import { ErrorService } from "./errors.services";
import { Database, ref, set } from "@angular/fire/database";


@Injectable({ providedIn: 'root' })
export class AuthService {
  str: string = "";

  constructor(public fireauth: AngularFireAuth, private router: Router, public database: Database) { }



  googleSignIn(): Promise<any> {
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res => {

      this.setuidToken(res);
      set(ref(this.database, 'users/' + res.user?.uid), {
        Tareas: {
          tareaprueba :{
            IQ: -120
          }
        }
      });
      this.router.navigate(['/menu']);

    }).catch(function (error) {
      alert(ErrorService.convertMessage(error['code']));
    });
  }

  signOut() {
    return this.fireauth.signOut().then(() => {

      this.removeuidToken();
      this.router.navigate(['/menu']);

    }).catch(function (error) {
      alert(ErrorService.convertMessage(error['code']));
    });
  }

  login(email: string, password: string) {

    this.fireauth.signInWithEmailAndPassword(email, password).then(res => {

      this.setuidToken(res);
      this.router.navigate(['/menu']);

    }).catch(function (error) {
      alert(ErrorService.convertMessage(error['code']));
    });
  }

  register(email: string, password: string) {

    this.fireauth.createUserWithEmailAndPassword(email, password).then(res => {

      this.setuidToken(res);
      set(ref(this.database, 'users/' + res.user?.uid), {
        Tareas: {
          tareaprueba :{
            IQ: -120
          }
        }
      });
      this.router.navigate(['/menu']);

    }).catch(function (error) {
      alert(ErrorService.convertMessage(error['code']));
    });



  }

  getuidToken() {

    if (localStorage.getItem('uidtoken') == null) {
      return false;
    } else {
      return true;
    }

  }

  setuidToken(res: any){

    this.str = JSON.stringify(res.user?.uid);
    this.str = this.str.replaceAll('"', '');
    localStorage.setItem('uidtoken', this.str);

  }

  removeuidToken(){
    localStorage.removeItem("uidtoken");
  }

  reloadPage() {
    // Usar el servicio de ubicación para recargar la ventana
    window.location.reload();
  }

}
