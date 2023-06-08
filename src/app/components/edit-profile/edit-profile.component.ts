import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit{
  userData: any; // Variable para almacenar los datos del usuario

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.obtenerDatosPsicologo();
  }

  obtenerDatosPsicologo() {
    const apiUrl = `https://psychohelp-open.mybluemix.net/api/v1/psychologists/${localStorage.getItem('id')}`; // URL del API para obtener los datos del usuario

    this.http.get(apiUrl).subscribe((data: any) => {
      this.userData = data; // Almacenar los datos del usuario en la variable userData
    });
  }

  actualizarDatosPsicologo() {
    this.http.put(`https://psychohelp-open.mybluemix.net/api/v1/psychologists/${localStorage.getItem('id')}`, this.userData)
    .subscribe(
      response => {
        console.log('Datos actualizados exitosamente', response);
      },
      error => {
        console.error('Error al actualizar los datos', error);
      }
    );
  }


}
