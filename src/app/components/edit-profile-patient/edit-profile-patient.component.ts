import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConfirmUpdateComponent } from '../confirm-update/confirm-update.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-profile-patient',
  templateUrl: './edit-profile-patient.component.html',
  styleUrls: ['./edit-profile-patient.component.css']
})



export class EditProfilePatientComponent implements OnInit{
  userData: any; // Variable para almacenar los datos del usuario

  constructor(private http: HttpClient, public dialog: MatDialog) { }

  ngOnInit() {
    this.obtenerDatosPaciente();
  }


  obtenerDatosPaciente() {
    const apiUrl = `https://psychohelp-open.mybluemix.net/api/v1/patients/${localStorage.getItem('id')}`; // URL del API para obtener los datos del usuario

    this.http.get(apiUrl).subscribe((data: any) => {
      this.userData = data; // Almacenar los datos del usuario en la variable userData
    });
  }

  actualizarDatosPaciente() {
    this.http.put(`https://psychohelp-open.mybluemix.net/api/v1/patients/${localStorage.getItem('id')}`, this.userData)
    .subscribe(
      response => {
        console.log('Datos actualizados exitosamente', response);
        this.openDialog();
      },
      error => {
        console.error('Error al actualizar los datos', error);
      }
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmUpdateComponent);

    dialogRef.afterClosed().subscribe(() => {
      console.log('Cuadro de diálogo cerrado');
    });
  }

  
}
