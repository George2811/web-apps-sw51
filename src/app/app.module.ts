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
import { CardsComponent } from './components/cards/cards.component';
import { ArtworkIdComponent } from './components/artwork-id/artwork-id.component';
import { HomePreviewComponent } from './components/home-preview/home-preview.component';
import { AboutViewComponent } from './components/about-view/about-view.component';
import { LoginRequestDialogComponent } from './components/login-request-dialog/login-request-dialog.component';
import { EventsIdComponent } from './components/events-id/events-id.component';
import { NewArtworkFormComponent } from './components/new-artwork-form/new-artwork-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from "@angular/flex-layout";
import { NewEventFormComponent } from './components/new-event-form/new-event-form.component';
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
import { HobbyistProfileComponent } from './components/hobbyist-profile/hobbyist-profile.component';
import { ArtistProfileComponent } from './components/artist-profile/artist-profile.component';
import { ArtistEventCardComponent } from './components/artist-event-card/artist-event-card.component';
import { OpenFileDialogComponent } from './components/open-file-dialog/open-file-dialog.component';
import { AssistanceFormComponent } from './components/assistance-form/assistance-form.component';
import { RecoverPasswordFormComponent } from './components/recover-password-form/recover-password-form.component';
import { RecoverPasswordDialogComponent } from './components/recover-password-dialog/recover-password-dialog.component';
import {authInterceptorProviders} from "./helpers/auth.interceptor";

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
    CardsComponent,
    ArtworkIdComponent,
    HomePreviewComponent,
    AboutViewComponent,
    LoginRequestDialogComponent,
    EventsIdComponent,
    NewArtworkFormComponent,
    HobbyistProfileComponent,
    NewEventFormComponent,
    ArtistProfileComponent,
    ArtistEventCardComponent,
    OpenFileDialogComponent,
    AssistanceFormComponent,
    RecoverPasswordFormComponent,
    RecoverPasswordDialogComponent,
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
    MatChipsModule,
    LayoutModule,
    FlexLayoutModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
