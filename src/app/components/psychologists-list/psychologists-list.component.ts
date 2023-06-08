import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";
import {PsychologistService} from "../../services/psychologist.service";
import {Psychologist} from "../../interfaces/psychologist";


@Component({
  selector: 'app-psychologists-list',
  templateUrl: './psychologists-list.component.html',
  styleUrls: ['./psychologists-list.component.css'],
})
export class PsychologistsListComponent implements OnInit{
  title = "Lista de psicólogos";
  gridColumns = 3;

  generos: any[] = [
    { name: 'Hombre', checked: false },
    { name: 'Mujer', checked: false }
  ];
  tiposSesiones: any[] = [
    { name: 'Presencial', checked: false },
    { name: 'A distancia', checked: false }
  ];
  duracion: any[] = [
    { name: '50 Minutos', checked: false },
    { name: '100 Minutos', checked: false }
  ];
  newData: any;
  constructor(
    private psychologistService: PsychologistService,
    private router: Router
  ) {}

  ngOnInit() {
    this.showPsychologists();
  }

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }
  showPsychologists() {
    this.psychologistService.getPsychologists()
      .subscribe({
        next: (res) =>{
          console.log(res);
          this.newData = res;
        },
        error:(err) =>{
          // alert('There was an error in retrieving data from the server')
          console.log(err)
        }
      })
   }
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
