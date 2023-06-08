import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logbook',
  templateUrl: './logbook.component.html',
  styleUrls: ['./logbook.component.css']
})
export class LogbookComponent implements OnInit{
  userData: any;
  appointments: any[] = [];
  selectedAppointment: any;

  constructor(private http: HttpClient){ }
  ngOnInit()  {
      this.obtenerDatosUsuario();
      this.obtenerCitas();
  }

  obtenerDatosUsuario() {
    const apiUrl = 'https://psychohelp-open.mybluemix.net/api/v1/patients/1'; // URL del API para obtener los datos del usuario

    this.http.get(apiUrl).subscribe((data: any) => {
      this.userData = data; // Almacenar los datos del usuario en la variable userData
    });
  }

  mostrarDetalleCita(appointment: any): void {
    const apiUrl = `https://psychohelp-open.mybluemix.net/api/v1/appointment/${appointment.id}`; // URL del API para obtener los datos del usuario

    this.http.get(apiUrl).subscribe((data: any) => {
      this.selectedAppointment = data; // Almacenar los datos del usuario en la variable userData
    });
  }

  obtenerCitas() {
    // Código para obtener las citas del paciente, ya sea a través de una llamada a un API o desde una fuente de datos local
    const apiUrl = 'https://psychohelp-open.mybluemix.net/api/v1/appointment/patient/1'; // URL del API para obtener los datos del usuario

    this.http.get(apiUrl).subscribe((data: any) => {
      this.appointments = data; // Almacenar los datos del usuario en la variable userData
    });
  }

  calculateAge(birthday: string): number {
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
  }

}
