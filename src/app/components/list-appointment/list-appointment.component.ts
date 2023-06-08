import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-appointment',
  templateUrl: './list-appointment.component.html',
  styleUrls: ['./list-appointment.component.css']
})
export class ListAppointmentComponent {
  appointmentData: any;

  constructor(private http: HttpClient, public dialog: MatDialog) { }

  ngOnInit() {
    this.obtenerListaDeCitas();
  }

  obtenerListaDeCitas() {
    const apiUrl = `https://psychohelp-open.mybluemix.net/api/v1/appointment/patient/`;
    const id = localStorage.getItem('id');
    this.http.get(apiUrl + id).subscribe((data: any) => {
      this.appointmentData = data;
    });
  }
  
  eliminarCita(id: number, event: Event) {
    event.preventDefault();

    const confirmacion = confirm("¿Estás seguro de que deseas eliminar esta cita?");
    if (!confirmacion) {
      return;
    }

    const apiUrl = `https://psychohelp-open.mybluemix.net/api/v1/appointment/`;
    this.http.delete(apiUrl + id).subscribe((data: any) => {
      location.reload();
    });
  }


}
