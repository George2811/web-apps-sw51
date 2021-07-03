import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TokenStorageService} from "../../services/token-storage.service";
import {ActivatedRoute} from "@angular/router";
import {HobbyistsApiService} from "../../services/hobbyists-api.service";
import {Hobbyist} from "../../models/hobbyist";
import {EventAssistanceService} from "../../services/event-assistance.service";

@Component({
  selector: 'app-assistance-form',
  templateUrl: './assistance-form.component.html',
  styleUrls: ['./assistance-form.component.css']
})
export class AssistanceFormComponent implements OnInit {
  assistanceForm : FormGroup;
  currentUser: any;
  hobbyist : Hobbyist = {} as Hobbyist;
  event: number = 0;
  eventId: number = 0;

  constructor(private location: Location,private formBuilder: FormBuilder, private HobbyistsAPiService: HobbyistsApiService,
              private tokenStorageService: TokenStorageService, private activatedRouter: ActivatedRoute,
              private eventAssistanceService: EventAssistanceService) {
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
    this.event = Number(this.activatedRouter.params.subscribe( (params: any) => {
      if (params.id) {
        this.eventId = params.id;
        const artistId = params.artistId;
        console.log('Este es el Artist Id: '+artistId);
      }
    }));
  }
  scheduledEvent(){
    this.eventAssistanceService.addEventAssistance(this.hobbyist.id, this.eventId)
      .subscribe( (response:any) => {
        console.log(response);
        this.back();
      })
  }
  modelChanged(date: any) {
    let theDate = new Date(Date.parse(date));
    const localDate = theDate.toISOString();
    console.log(localDate);
  }
  back(): void{
    this.location.back();
  }

}
