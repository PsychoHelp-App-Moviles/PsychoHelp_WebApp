import { Injectable } from '@angular/core';


import{HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http'
import { Observable,throwError } from 'rxjs';
import { Publication } from '../interfaces/publication';
import	{catchError,retry}from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})


export class PublicationService {
 // basePath='https://be-trip-back322.herokuapp.com/api/v1/travel-events?page=0&size=1&sort=string'
  //basePathito='http://localhost:3000/api/v1/Publications'
 basePathito='https://psychohelp-open.mybluemix.net/api/v1/publications'
  

  httpOptions={
    
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    })
   }


  constructor(private http:HttpClient) {}
  


   handleError(error:HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.log(`A error has Ocurred:${error.error.message}`)
    }else{
      console.error(`Backend return code ${error.status}, body was:${error.error  }`);
    }
    return throwError('Something  happened with request, please try again later')
  }


  getById(id:any){
    return this.http.get<Publication>(`${this.basePathito}/${id}`,this.httpOptions).pipe(
    retry(2),
    catchError(this.handleError)
    );
}

  //Get All
  getAll(){
    return this.http.get<Publication>(this.basePathito, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }





}
