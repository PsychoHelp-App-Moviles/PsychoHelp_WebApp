
import { Component, ViewChild, TemplateRef, } from "@angular/core";
import { Login } from '../../interfaces/login';
import { Register } from '../../interfaces/register';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router'; 
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})

export class LoginComponent {

  @ViewChild('modalRegister', { static: true }) modalRegister?: TemplateRef<any>;

  mylogin : Login = {
    email: '',
    password:''
  };
  
  myregister : Register = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    date: '10/06/2023',
    gender: '',
    img: 'image'
  };

  constructor(
    private loginService: LoginService,
    private router: Router,
    private modal: NgbModal,
  ) {}

  submitLogin(){
    // this.router.navigate(['/main'])
    this.loginService.getPatientbyEmail(this.mylogin)
      .subscribe({
        next: (res) =>{
          console.log(res);
          const entries = Object.entries(res)
          entries.forEach(([key, value]) => {
            if(key == 'id'){
              localStorage.setItem('id',value)
              localStorage.setItem('Type','Patient')
              console.log(value)
            }
          });
          if(res.email == this.mylogin.email && res.password == this.mylogin.password){
            console.log("correct credentials PACIENT")
            this.router.navigate(['/main'])
          }else{
            alert("incorrect credentials pacient")
          }
        },
        error:(err) =>{
          // alert('There was an error in retrieving data from the server')
          console.log(err)
        }
      })

    this.loginService.getPsychologistbyEmail(this.mylogin)
      .subscribe({
        next: (res) =>{
          console.log(res);
          const entries = Object.entries(res)
          entries.forEach(([key, value]) => {
            if(key == 'id'){
              localStorage.setItem('id',value)
              localStorage.setItem('Type','Psychologist')
              console.log(value)
            }
          });
          if(res.email == this.mylogin.email && res.password == this.mylogin.password){
            console.log("correct credentials PSYCHOLOGIST")
            this.router.navigate(['/main'])
          }else{
            alert("incorrect credentials psychologist")
          }
        },
        error:(err) =>{
          // alert('There was an error in retrieving data from the server')
          console.log(err)
        }
      })

  }

  login() {
    // console.log(this.mylogin.email);
    // console.log(this.mylogin.password);
  }
}