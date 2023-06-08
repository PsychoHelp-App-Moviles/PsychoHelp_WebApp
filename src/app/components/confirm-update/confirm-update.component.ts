import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-update',
  templateUrl: './confirm-update.component.html',
  styleUrls: ['./confirm-update.component.css']
})
export class ConfirmUpdateComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmUpdateComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

}
