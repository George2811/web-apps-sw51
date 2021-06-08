import {RouterModule} from "@angular/router";
import {AppComponent} from "../app.component";

//Aqui se agregan las rutas con su respectivo componente
// Sintaxis = {path: '', component: , pathMatch: 'full'}

const appRoutes = [
  {path: 'menu', component: AppComponent, pathMatch: 'full'},
];
export const routing = RouterModule.forRoot(appRoutes);
