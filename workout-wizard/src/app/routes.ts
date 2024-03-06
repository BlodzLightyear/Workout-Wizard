import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login/login.component";
import { RoutesComponent } from "./routes/routes.component";
import { MainMenuComponent } from "./Main/main-menu/main-menu.component";
import { ShieldAuthGuard } from "shield-auth.guard";

export const routes: Routes =  [
  { path: "login", component: LoginComponent},
  { path: "rutas", component: RoutesComponent},
  { path: "menu", component: MainMenuComponent,
  canActivate : [ShieldAuthGuard]},
  { path: "", redirectTo:'/rutas', pathMatch: "full"}
]



/*
  { path: "crono", component: CronoComponent},
  { path: "wikipedia", component: WikipediaComponent},
  { path: "wikipedia/:autorId", component: DetallePersonaComponent , children: [{path: 'libros' , component: LibrosComponent}] },
  { path: "content", component: ContentComponent},
  { path: "menu", component: MainMenuComponent,
  canActivate : [ShieldAuthGuard]}*/
