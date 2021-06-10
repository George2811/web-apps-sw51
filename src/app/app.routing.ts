import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {InterfaceGroupComponent} from "./components/interface-group/interface-group.component";
import {PreMenuComponent} from "./components/pre-menu/pre-menu.component";
import {NgModule} from "@angular/core";
import {HomepageComponent} from "./components/homepage/homepage.component";
import {LoginFormComponent} from "./components/login-form/login-form.component";
import {RegisterFormComponent} from "./components/register-form/register-form.component";
import {TermsAndConditionsComponent} from "./components/terms-and-conditions/terms-and-conditions.component";
//Aqui se agregan las rutas con su respectivo componente
// Sintaxis = {path: '', component: , pathMatch: 'full'}

const appRoutes:Routes = [

  {path: 'home', component: HomepageComponent, pathMatch: 'full'},
  {path: 'about', component: PreMenuComponent, pathMatch: 'full'},
  {path: 'register', component: RegisterFormComponent, pathMatch: 'full'},
  {path: 'login', component: LoginFormComponent, pathMatch: 'full'},
  {path: 'menu', component: InterfaceGroupComponent, pathMatch: 'full'},
  {path: 'terms&conditions', component: TermsAndConditionsComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
  })
export class AppRouting{};
