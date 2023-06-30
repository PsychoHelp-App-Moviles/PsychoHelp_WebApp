import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { MainComponent } from './components/main/main.component'
import { LogbookComponent } from './components/logbook/logbook.component';
import { EditProfilePatientComponent } from './components/edit-profile-patient/edit-profile-patient.component';
import {PsychologistsListComponent} from "./components/psychologists-list/psychologists-list.component";
import { ListAppointmentComponent } from './components/list-appointment/list-appointment.component';
import { ChatComponent } from './components/chat/chat.component';


const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:"psychologist_profile",
    component: EditProfileComponent
  },
  {
    path:"patient_profile",
    component: EditProfilePatientComponent
  },
  {
    path:"main",
    component: MainComponent
  },
  {
    path:"historial-citas",
    component: ListAppointmentComponent
  },
  {
    path:"logbook",
    component: LogbookComponent
  },
  {
    path:'psychologists-list',
    component: PsychologistsListComponent
  },
  {
    path:'chat',
    component: ChatComponent
  }
  // {
  //   path:'/home',
  //   component: AppComponent
  // },
  // {
  //   path:'calendario',
  //   component: CalendarioMonthComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
