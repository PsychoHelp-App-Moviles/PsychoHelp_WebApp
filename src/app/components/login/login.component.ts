
import { Component } from "@angular/core";
import { Login } from '../../interfaces/login';
import { LoginService } from 'src/app/services/login.service';

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
  ) {}

  submitLogin(){
    // this.loginService.verifyLogin(this.mylogin)
    // .subscribe(
    //   res => {
    //     console.log(res);
    //     this.router.navigate(['/'])
    //   },
    //   err => console.log(err)
    // )
  }

  login() {
    console.log(this.mylogin.email);
    console.log(this.mylogin.password);
  }
}