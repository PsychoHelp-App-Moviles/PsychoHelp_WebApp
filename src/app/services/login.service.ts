
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

    //GET patient by email
    getPatientbyEmail(login:Login):Observable<Login>{
      return this.http.get<Login>(`${this.BASE_URL}/patients/email/${login.email}`)
    }

    //GET psychologist by email
    getPsychologistbyEmail(login:Login):Observable<Login>{
      return this.http.get<Login>(`${this.BASE_URL}/psychologists/email/${login.email}`)
    }

    //GETS
    // getPatients():Observable<Login[]>{
    //   return this.http.get<Login[]>(`${this.BASE_URL}/patients`)
    // }

    //POST
    // createEvents(event: Event):Observable<Event>{
    //   return this.http.post<Event>(`${this.BASE_URL}/evento/create`,event)
    // }
    
    //DELETE
    // deleteEvents(id:string){
    //   return this.http.delete<Event>(`${this.BASE_URL}/evento/delete?eventId=${id}`)
    //   return this.http.delete<Event>(`${this.BASE_URL}/evento/delete/${id}`)
    // }

    //UPDATE
    // updateEvents(id: string,event: Event): Observable<Event>{
    //   return this.http.put<Event>(`${this.BASE_URL}/evento/update/${id}`,event)
    // }

    //POST
    // verifyLogin(login: Login):Observable<Login>{
        // return this.http.post<Login>(`${this.BASE_URL}/patients/email/${login.email}`,login)
    // }

}

