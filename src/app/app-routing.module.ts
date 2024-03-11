import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './main/menu/menu.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ShieldAuthGuard } from './services/shield-auth.guard';

const routes: Routes = [
  { path: "login", component: LoginComponent},
  { path: "register", component: RegisterComponent},
  { path: "profile", component: ProfileComponent,
  canActivate : [ShieldAuthGuard]},
  { path: "menu", component: MenuComponent},
  { path: "", redirectTo:'/menu', pathMatch: "full"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
