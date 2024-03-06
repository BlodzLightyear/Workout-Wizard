import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { RoutesComponent } from './routes/routes.component';
import { MainMenuComponent } from './Main/main-menu/main-menu.component';
import { TiendaComponent } from './Main/tienda/tienda.component';
import { EntrenamientosComponent } from './Main/entrenamientos/entrenamientos.component';
import { DietasComponent } from './Main/dietas/dietas.component';
import { GestorArticulosComponent } from './Main/gestor-articulos/gestor-articulos.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { environment } from 'src/environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RoutesComponent,
    MainMenuComponent,
    TiendaComponent,
    EntrenamientosComponent,
    DietasComponent,
    GestorArticulosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideDatabase(() => getDatabase()),
    FormsModule,
    provideAuth(() => getAuth())
  ],
  providers: [AuthService, {provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig}],
  bootstrap: [AppComponent]
})
export class AppModule { }
