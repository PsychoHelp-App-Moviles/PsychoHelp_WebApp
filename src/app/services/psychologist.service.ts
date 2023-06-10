
import { EnvironmentInjector, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Login } from '../interfaces/login';
import { environment } from 'src/environments/environment';
import {Psychologist} from "../interfaces/psychologist";

@Injectable({
  providedIn: 'root'
})

export class PsychologistService {
  BASE_URL = environment.server
  constructor(private http: HttpClient) {}

  //GET psychologists
  getPsychologists():Observable<Psychologist[]>{
    return this.http.get<Psychologist[]>(`${this.BASE_URL}/psychologists/`)
  }
  //UPDATE
  updatePsychologist(id: string,event: Event): Observable<Event>{
    return this.http.put<Event>(`${this.BASE_URL}/psychologists/${id}`,event)
  }
}
