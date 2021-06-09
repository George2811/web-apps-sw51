import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {InterfaceGroupComponent} from "./components/interface-group/interface-group.component";
import {PreMenuComponent} from "./components/pre-menu/pre-menu.component";
import {NgModule} from "@angular/core";
import {HomepageComponent} from "./components/homepage/homepage.component";
import {LoginFormComponent} from "./components/login-form/login-form.component";
//Aqui se agregan las rutas con su respectivo componente
// Sintaxis = {path: '', component: , pathMatch: 'full'}

const appRoutes:Routes = [
  {path: '', component: PreMenuComponent, pathMatch: 'full'},
  {path: 'home', component: HomepageComponent, pathMatch: 'full'},
  {path: 'login', component: LoginFormComponent, pathMatch: 'full'},
  {path: 'pre-menu', component: AppComponent, pathMatch: 'full'},
  {path: 'menu', component: InterfaceGroupComponent, pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
  })
export class AppRouting{};
