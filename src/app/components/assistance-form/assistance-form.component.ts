import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TokenStorageService} from "../../services/token-storage.service";
import {ActivatedRoute} from "@angular/router";
import {HobbyistsApiService} from "../../services/hobbyists-api.service";
import {Hobbyist} from "../../models/hobbyist";

@Component({
  selector: 'app-assistance-form',
  templateUrl: './assistance-form.component.html',
  styleUrls: ['./assistance-form.component.css']
})
export class AssistanceFormComponent implements OnInit {
  assistanceForm : FormGroup;
  currentUser: any;
  hobbyist : Hobbyist = {} as Hobbyist;

  constructor(private location: Location,private formBuilder: FormBuilder, private HobbyistsAPiService: HobbyistsApiService,
              private tokenStorageService: TokenStorageService, private activatedRouter: ActivatedRoute) {
   this.assistanceForm = this.formBuilder.group({
     assistanceDay: [null,Validators.required]
   })
  }
  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser().userId;
    this.HobbyistsAPiService.getByUserId(this.currentUser).subscribe( (response: any) => {
      this.hobbyist = response;
      console.log(this.hobbyist);
    });

  }
  sendForm(values: any){
    let day = new Date(Date.parse(values)).toLocaleString();
    console.log('Este es Day: '+ day);
    console.log(values);
  }
  modelChanged(date: any) {
    let theDate = new Date(Date.parse(date));
    //const localDate = theDate.toLocaleString().split(" ");
    const localDate = theDate.toISOString();

    console.log(localDate);
  }
  back(): void{
    this.location.back();
  }

}
