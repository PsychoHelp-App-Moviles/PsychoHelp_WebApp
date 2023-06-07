import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { MainComponent } from './components/main/main.component'
import { LogbookComponent } from './components/logbook/logbook.component';


const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:"profile",
    component: EditProfileComponent
  },
  {
  path:"main",
  component: MainComponent
  },
  {
    path:"logbook",
    component: LogbookComponent
  },
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
