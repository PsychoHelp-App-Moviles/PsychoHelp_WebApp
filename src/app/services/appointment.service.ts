
import { EnvironmentInjector, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {catchError, Observable, retry} from 'rxjs';
import { Login } from '../interfaces/login';
import { environment } from 'src/environments/environment';
import {Appointment} from "../interfaces/appointment";

@Injectable({
  providedIn: 'root'
})

export class AppointmentService {
  BASE_URL = environment.server
  constructor(private http: HttpClient) {}

  //Crear cita
  createAppointment(appointment:Appointment, idPsycho: any): Observable<Appointment> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(appointment);
    console.log(body)
    return this.http.post<Appointment>(`${this.BASE_URL}/appointment/patient/${localStorage.getItem('id')}/psychologist/${idPsycho}`, body,{'headers':headers})
  }

}
