import {Component, OnInit, Inject, ElementRef} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";
import {PsychologistService} from "../../services/psychologist.service";
import {Psychologist} from "../../interfaces/psychologist";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Login} from "../../interfaces/login";
import {AppointmentService} from "../../services/appointment.service";
import {Appointment} from "../../interfaces/appointment";


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
    public dialog: MatDialog,
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

  openDialog(element: any): void {
    let dialogRef = this.dialog.open(PsychologistDetailDialog, {
      width: '40%',
      height: 'auto',
      panelClass: 'my-centered-dialog',
      data: { element } // <== this is it
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogAgendar(element: any): void {
    let dialogRef = this.dialog.open(PsychologistAgendarDialog, {
      width: '40%',
      height: 'auto',
      panelClass: 'my-agendar-dialog',
      data: { element } // <== this is it
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'psychologist-detail-dialog',
  templateUrl: 'psychologist-detail-dialog.html',
  styleUrls: ['./psychologists-list.component.css'],
})
export class PsychologistDetailDialog {

  constructor(
    public dialogRef: MatDialogRef<PsychologistDetailDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}


@Component({
  selector: 'psychologist-agendar-dialog',
  templateUrl: 'psychologist-agendar-dialog.html',
  styleUrls: ['./psychologists-list.component.css'],
})


export class PsychologistAgendarDialog {
  appointmentData: Appointment;
  constructor(
    public dialogRef: MatDialogRef<PsychologistAgendarDialog>,
    public dialog: MatDialog,
    private appointmentService: AppointmentService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.appointmentData = {} as Appointment;
  }

  newData: any;
  defaultValue = { hour: 13, minute: 30 };

  timeChangeHandler(event: any) {}

  invalidInputHandler() {}
  formattedDate: string = "";
  onNoClick(): void {
    this.dialogRef.close();
  }

  saveDate(event: any) {
    const data = event;
    this.appointmentData.scheduleDate = data.getDate() + '-' + (data.getMonth() + 1) + '-' + data.getFullYear();
  }
  timeChange (event: any) {
    const time = event;
    var splitted = time.split(':');
    var hour = splitted[0];
    var minute = splitted[1];
    this.appointmentData.scheduleDate += ' '+hour +':' + minute;
  }
  openDialogSavedAppointment(): void {
    let dialogRef = this.dialog.open(PsychologistSavedAppointmentDialog, {
      width: '40%',
      height : 'auto',
      panelClass: 'my-saved-appointment-dialog',
      // <== this is it
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  postAppointment(idPsycho: number) {
    this.appointmentData.meetUrl = "https://meet.google.com/xpr-peaq-jtf";
    this.appointmentData.motive = "Problemas emocionales";
    this.appointmentData.personalHistory = "string";
    this.appointmentData.testRealized = "string";
    this.appointmentData.treatment = "string";
    this.appointmentService.createAppointment(this.appointmentData, idPsycho)
      .subscribe( {
        next: (res) =>{
          console.log("Cita agendada ", res);
          this.newData = res;
          this.onNoClick();
          this.openDialogSavedAppointment();
        },
        error:(err) =>{
          // alert('There was an error in retrieving data from the server')
          console.log(err)
        }
    });
  }

}

@Component({
  selector: 'psychologist-saved-appointment-dialog',
  templateUrl: 'psychologist-saved-appointment-dialog.html',
  styleUrls: ['./psychologists-list.component.css'],
})
export class PsychologistSavedAppointmentDialog {

  constructor(
    public dialogRef: MatDialogRef<PsychologistSavedAppointmentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
