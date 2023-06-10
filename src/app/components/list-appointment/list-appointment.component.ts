import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditAppointmentComponent } from '../edit-appointment/edit-appointment.component';


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

  openDialog(id: number, event: Event) {
    event.preventDefault();
    const dialogRef = this.dialog.open(EditAppointmentComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().subscribe((selectedDate: string) => {
      if (selectedDate) {
        this.reagendarCita(id, selectedDate);
      }
    });
  }

  reagendarCita(id: number, nuevaFecha: string) {

    const apiUrl = `https://psychohelp-open.mybluemix.net/api/v1/appointment/`;
    const appointmentData = {
      meetUrl: "string",
      scheduleDate: nuevaFecha,
      personalHistory: "string",
      motive: "string",
      testRealized: "string",
      treatment: "string"
    };
    
    this.http.put(apiUrl + id, appointmentData).subscribe(
      (response) => {
        alert('La cita se reagendó exitosamente');
        console.log('La cita se reagendó exitosamente:', response);
        location.reload();
      },
      (error) => {
        alert('Ocurrió un error al reagendar la cita');
        console.error('Error al reagendar la cita:', error);
      }
    );
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
