import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login/login.component";
import { RoutesComponent } from "./routes/routes.component";

export const routes: Routes =  [
  { path: "login", component: LoginComponent},
  { path: "rutas", component: RoutesComponent},
  { path: "", redirectTo:'/rutas', pathMatch: "full"}
]



/*
  { path: "crono", component: CronoComponent},

  { path: "wikipedia", component: WikipediaComponent},
  { path: "wikipedia/:autorId", component: DetallePersonaComponent , children: [{path: 'libros' , component: LibrosComponent}] },
  { path: "content", component: ContentComponent},
  { path: "menu", component: MainMenuComponent,
  canActivate : [ShieldAuthGuard]}*/
