import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
  isCollapsed : boolean = true;

  ngOnInit(): void {
  }

  getProfileRoute(): string {
    const userType = localStorage.getItem('type');
    return userType === 'Psychologist' ? '/psychologist_profile' : '/patient_profile';
  }

}
