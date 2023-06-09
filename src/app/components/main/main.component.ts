import { Component, OnInit } from '@angular/core';
import { PublicationService } from 'src/app/services/publication.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  isCollapsed : boolean = true;


  publicationData:any;
  guardado:any; 
  constructor(private PublicationService:PublicationService) { }
  ngOnInit(): void {

    this.getPublications();

  }

  getProfileRoute(): string {
    const userType = localStorage.getItem('type');
    return userType === 'Psychologist' ? '/psychologist_profile' : '/patient_profile';
  }


  getPublications(){
    // aca comprobamos que el usuario está guardado en el local storage
      //this.guardado= localStorage.getItem('user');
      //console.log(this.guardado)

      this.PublicationService.getAll().subscribe(data => {
        this.publicationData = data;
        console.log(this.publicationData.content)
      });   
      
      
}

}
