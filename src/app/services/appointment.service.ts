import { EnvironmentInjector, Injectable } from '@angular/core';
import{HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http'
import { Observable,throwError,catchError,retry} from 'rxjs';
import { Appointment } from '../interfaces/appointment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {


  // basePath='https://be-trip-back322.herokuapp.com/api/v1/travel-events?page=0&size=1&sort=string'
  //basePathito='http://localhost:3000/api/v1/Publications'
  basePathito='https://psychohelp-open.mybluemix.net/api/v1/appointment'
  BASE_URL = environment.server
  httpOptions={

    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    })
  }
  constructor(private http:HttpClient) { }


  handleError(error:HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.log(`A error has Ocurred:${error.error.message}`)
    }else{
      console.error(`Backend return code ${error.status}, body was:${error.error  }`);
    }
    return throwError('Something  happened with request, please try again later')
  }

  //Crear cita
  createAppointment(appointment:Appointment, idPsycho: any): Observable<Appointment> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(appointment);
    console.log(body)
    return this.http.post<Appointment>(`${this.BASE_URL}/appointment/patient/${localStorage.getItem('id')}/psychologist/${idPsycho}`, body,{'headers':headers})
  }


  getById(id:any){
    return this.http.get<Appointment>(`${this.basePathito}/${id}`,this.httpOptions).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getAll(){
    return this.http.get<Appointment>(this.basePathito, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
}
