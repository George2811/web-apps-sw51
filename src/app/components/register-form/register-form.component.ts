import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  strongPasswordPattern: string = "(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$";
  constructor(private formBuilder:FormBuilder) {
    this.registerForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email ]],
      password: [null, [Validators.required, Validators.minLength(8), Validators.pattern(this.strongPasswordPattern)]]
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
}
