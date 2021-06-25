import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {LoginRequestDialogComponent} from "../login-request-dialog/login-request-dialog.component";

@Component({
  selector: 'app-recover-password-dialog',
  templateUrl: './recover-password-dialog.component.html',
  styleUrls: ['./recover-password-dialog.component.css']
})
export class RecoverPasswordDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoginRequestDialogComponent>) { }

  ngOnInit(): void {
  }
  closeDialog(){
    this.dialogRef.close();
  }
}
