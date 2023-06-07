import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { MatFormFieldModule } from '@angular/material/form-field'; // Importa el módulo de Angular Material que necesitas
// import { MatInputModule } from '@angular/material/input'; // Importa el módulo de Angular Material que necesitas

import {HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import {LoginComponent} from './components/login/login.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PsychologistsListComponent } from './components/psychologists-list/psychologists-list.component'
import {MatLegacyCardModule} from "@angular/material/legacy-card";
import {MatLegacyFormFieldModule} from "@angular/material/legacy-form-field";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
// import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    EditProfileComponent
    //PsychologistsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbModalModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // MatFormFieldModule,
    // MatInputModule,
    BrowserAnimationsModule,
    MatLegacyCardModule,
    MatLegacyFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    // MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
