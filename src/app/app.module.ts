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
// import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { LogbookComponent } from './components/logbook/logbook.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    EditProfileComponent,
    LogbookComponent
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
    // MatIconModule
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
