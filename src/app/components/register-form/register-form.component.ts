import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {TermsAndConditionsComponent} from "../terms-and-conditions/terms-and-conditions.component";
import {Router} from "@angular/router";
import {stringify} from "@angular/compiler/src/util";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  strongPasswordPattern: string = "(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$";
  constructor(private formBuilder:FormBuilder, public dialog: MatDialog, private router:Router) {
    this.registerForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email ]],
      password: [null, [Validators.required, Validators.minLength(8), Validators.pattern(this.strongPasswordPattern)]],
      user: [null, [Validators.required, Validators.minLength(8)]],
      userType: [null, Validators.required],
      terms: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
  }
  onSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value);
  }
  openDialog() {
    const dialogRef = this.dialog.open(TermsAndConditionsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  sendUserToNextPage(){
    if (this.registerForm.controls['userType'].value == 1)
      this.router.navigate(['/artist-profile']);
    else
      this.router.navigate(['/home']);
  }
}
