
import { Component } from "@angular/core";
import { Login } from '../../interfaces/login';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {

  mylogin : Login = {
    email: '',
    password:''
  };

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  submitLogin(){
    // this.router.navigate(['/main'])
    this.loginService.getemailPatient(this.mylogin)
    .subscribe({
    next: (res) =>{
      console.log(res);
      //this.router.navigate(['/psychologists-list'])
    },
    error:(err) =>{
      alert('There was an error in retrieving data from the server')
      console.log(err)
    }
    })
  }

  login() {
    // console.log(this.mylogin.email);
    // console.log(this.mylogin.password);
  }
}
