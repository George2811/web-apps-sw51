import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-assistance-form',
  templateUrl: './assistance-form.component.html',
  styleUrls: ['./assistance-form.component.css']
})
export class AssistanceFormComponent implements OnInit {

  assistanceForm : FormGroup;


  constructor(private location: Location,private formBuilder: FormBuilder) {
   this.assistanceForm = this.formBuilder.group({
     assistanceDay:[null,Validators.required]

   })
  }
  ngOnInit(): void {
  }

  back(): void{
    this.location.back();
  }

}
