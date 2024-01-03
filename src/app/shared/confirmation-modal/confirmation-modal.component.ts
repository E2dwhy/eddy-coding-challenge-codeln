import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {

  form: UntypedFormGroup | undefined;
  constructor(@Inject(MAT_DIALOG_DATA) public content: any,
              private dialogRef: MatDialogRef<ConfirmationModalComponent>,) {
  }
  @ViewChild('fileInput') fileInput: ElementRef | undefined;

  ngOnInit() {
  }

  save() {
    this.dialogRef.close(true);
  }


}
