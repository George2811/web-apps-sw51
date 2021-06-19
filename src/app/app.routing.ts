import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {InterfaceGroupComponent} from "./components/interface-group/interface-group.component";
import {NgModule} from "@angular/core";
import {HomepageComponent} from "./components/homepage/homepage.component";
import {LoginFormComponent} from "./components/login-form/login-form.component";
import {RegisterFormComponent} from "./components/register-form/register-form.component";
import {TermsAndConditionsComponent} from "./components/terms-and-conditions/terms-and-conditions.component";
import {HomePreviewComponent} from "./components/home-preview/home-preview.component";
import {ArtworkIdComponent} from "./components/artwork-id/artwork-id.component";
import {AboutViewComponent} from "./components/about-view/about-view.component";
import {EventsIdComponent} from "./components/events-id/events-id.component";
import {NewArtworkFormComponent} from "./components/new-artwork-form/new-artwork-form.component";
import {HobbyistProfileComponent} from "./components/hobbyist-profile/hobbyist-profile.component";
//Aqui se agregan las rutas con su respectivo componente
// Sintaxis = {path: '', component: , pathMatch: 'full'}

const appRoutes:Routes = [
  {path: '', component: HomePreviewComponent, pathMatch: 'full'},
  {path: 'home', component: HomepageComponent, pathMatch: 'full'},

  {path: 'about', component: AboutViewComponent, pathMatch: 'full'},
  {path: 'register', component: RegisterFormComponent, pathMatch: 'full'},
  {path: 'login', component: LoginFormComponent, pathMatch: 'full'},
  {path: 'menu', component: InterfaceGroupComponent, pathMatch: 'full'},
  {path: 'artwork', component: ArtworkIdComponent, pathMatch: 'full'},
  {path: 'event', component: EventsIdComponent, pathMatch: 'full'},
  {path: 'terms&conditions', component: TermsAndConditionsComponent, pathMatch: 'full'},
  {path: 'artwork-form', component: NewArtworkFormComponent, pathMatch: 'full'},
  {path: 'hobbyist-profile', component: HobbyistProfileComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
  })
export class AppRouting{};
