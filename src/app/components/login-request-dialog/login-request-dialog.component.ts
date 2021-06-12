import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-login-request-dialog',
  templateUrl: './login-request-dialog.component.html',
  styleUrls: ['./login-request-dialog.component.css']
})
export class LoginRequestDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoginRequestDialogComponent>) { }

  ngOnInit(): void {
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
