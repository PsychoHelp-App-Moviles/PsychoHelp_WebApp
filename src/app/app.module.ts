import { NgModule } from '@angular/core';
import {NgbModule, NgbTimepickerModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatFormFieldModule } from '@angular/material/form-field'; // Importa el módulo de Angular Material que necesitas
// import { MatInputModule } from '@angular/material/input'; // Importa el módulo de Angular Material que necesitas

import {HttpClientModule} from '@angular/common/http'

import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import {LoginComponent} from './components/login/login.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { LogbookComponent } from './components/logbook/logbook.component';
import { EditProfilePatientComponent } from './components/edit-profile-patient/edit-profile-patient.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ConfirmUpdateComponent } from './components/confirm-update/confirm-update.component';
import {
  PsychologistAgendarDialog,
  PsychologistDetailDialog, PsychologistSavedAppointmentDialog,
  PsychologistsListComponent
} from "./components/psychologists-list/psychologists-list.component";
import {MatIconModule} from "@angular/material/icon";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {CommonModule, JsonPipe, NgForOf} from "@angular/common";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {DateAdapter, MAT_DATE_FORMATS, MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    EditProfileComponent,
    LogbookComponent,
    EditProfilePatientComponent,
    ConfirmUpdateComponent,
    PsychologistsListComponent,
    PsychologistDetailDialog,
    PsychologistAgendarDialog,
    PsychologistSavedAppointmentDialog
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
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    CommonModule,
    FlexLayoutModule,
    NgForOf,
    MatSidenavModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMatTimepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
