
import { EnvironmentInjector, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Login } from '../interfaces/login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
    BASE_URL = environment.server
    constructor(private http: HttpClient) {}

    // verifyLogin(login: Login):Observable<Login>{
    //     return this.http.post<Login>(`${this.BASE_URL}/login/verify`,login)
    // }

}