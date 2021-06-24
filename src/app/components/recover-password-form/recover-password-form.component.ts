import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {RecoverPasswordDialogComponent} from "../recover-password-dialog/recover-password-dialog.component";

@Component({
  selector: 'app-recover-password-form',
  templateUrl: './recover-password-form.component.html',
  styleUrls: ['./recover-password-form.component.css']
})
export class RecoverPasswordFormComponent implements OnInit {
  recoverForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private dialog: MatDialog) {
    this.recoverForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email ]]
    });
  }

  ngOnInit(): void {
  }
  onSubmit(): void {
    if (this.recoverForm.invalid) {
      return;
    }
    console.log(this.recoverForm.value);
  }
  openDialog(){
    this.dialog.open(RecoverPasswordDialogComponent);
  }
}

