import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { MainComponent } from './components/main/main.component'
import {PsychologistsListComponent} from "./components/psychologists-list/psychologists-list.component";


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
    path:"psychologists-list",
    component: PsychologistsListComponent
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
