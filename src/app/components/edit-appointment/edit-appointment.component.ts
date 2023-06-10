import { Component } from '@angular/core';
import { formatDate } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent {

  selectedDate: string = "";

  constructor(public dialogRef: MatDialogRef<EditAppointmentComponent>) {}

  closeDialog() {
    this.selectedDate = formatDate(this.selectedDate, 'dd/MM/yyyy', 'en-GB');
    this.dialogRef.close(this.selectedDate);
  }

}
