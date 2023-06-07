import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-psychologists-list',
  templateUrl: './psychologists-list.component.html',
  styleUrls: ['./psychologists-list.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})
export class PsychologistsListComponent{
  /*psichologists: any; // Variable para almacenar los datos del usuario paciente

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.obtenerPsicólogos();
  }

  obtenerPsicólogos() {
    const apiUrl = 'https://psychohelp-open.mybluemix.net/api/v1/psychologists'; // URL del API para obtener los psicologos

    this.http.get(apiUrl).subscribe((data: any) => {
      this.psichologists = data; // Almacenar los datos de los psicólogs
    });
  }

  dataSource = new MatTableDataSource(this.psichologists);*/

}
