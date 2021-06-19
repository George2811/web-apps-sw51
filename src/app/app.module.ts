import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './components/homepage/homepage.component';
import { InterfaceGroupComponent } from './components/interface-group/interface-group.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { ArtworksComponent } from './components/artworks/artworks.component';
import { ArtworkIdComponent } from './components/artwork-id/artwork-id.component';
import { HomePreviewComponent } from './components/home-preview/home-preview.component';
import { AboutViewComponent } from './components/about-view/about-view.component';
import { LoginRequestDialogComponent } from './components/login-request-dialog/login-request-dialog.component';
import { EventsIdComponent } from './components/events-id/events-id.component';
import { NewArtworkFormComponent } from './components/new-artwork-form/new-artwork-form.component';
import { NewEventFormComponent } from './components/new-event-form/new-event-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFileUploadModule } from "angular-material-fileupload";
// Routing
import { AppRouting } from "./app.routing";
// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatCardModule} from '@angular/material/card';
import { MatListModule} from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule} from "@angular/forms";
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    InterfaceGroupComponent,
    TermsAndConditionsComponent,
    HomepageComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ArtworksComponent,
    ArtworkIdComponent,
    HomePreviewComponent,
    AboutViewComponent,
    LoginRequestDialogComponent,
    EventsIdComponent,
    NewArtworkFormComponent,
    NewEventFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    ScrollingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    AppRouting,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFileUploadModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
