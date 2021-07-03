import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {EventsApiService} from "../../services/events-api.service";
import { Router, ActivatedRoute } from '@angular/router';
import {Event} from "../../models/event";
import {TokenStorageService} from "../../services/token-storage.service";
import {EventAssistanceService} from "../../services/event-assistance.service";
import {HobbyistsApiService} from "../../services/hobbyists-api.service";
import {Hobbyist} from "../../models/hobbyist";

@Component({
  selector: 'app-events-id',
  templateUrl: './events-id.component.html',
  styleUrls: ['./events-id.component.css']
})
export class EventsIdComponent implements OnInit {

  currentUser: any;
  eventId!: number;
  eventData: Event = {} as Event;
  hobbyist : Hobbyist = {} as Hobbyist;
  scheduledAction: string = '';
  scheduled: boolean = false;
  artistId: number = 0;
  constructor(private location: Location, private eventsApiService: EventsApiService,private HobbyistsAPiService: HobbyistsApiService,
              private tokenStorageService: TokenStorageService,
              private activatedRouter: ActivatedRoute, private router: Router,
              private eventAssistanceService: EventAssistanceService) { }

  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser().userId;
    this.eventId = Number(this.activatedRouter.params.subscribe( (params: any) => {
      if (params.id) {
        const id = params.id;
        this.artistId = params.artistId;
        this.retrieveEvent(this.artistId, id);
      }
    }));
    this.HobbyistsAPiService.getByUserId(this.currentUser).subscribe( (response: any) => {
      this.hobbyist = response;
      //console.log(this.hobbyist);
      this.isScheduled();
    });
  }
  retrieveEvent(artistid: number, id: number): void {
    this.eventsApiService.getEventByIdAndArtistId(artistid, id)
      .subscribe((response:any) => {
        this.eventData = response;
      })
  }
  isScheduled(){
    this.eventAssistanceService.getEventAssistance(this.hobbyist.id)
      .subscribe((response:any)=>{
        response.content.forEach((e:any)=>{
          if (this.eventData.id === e.id){
            this.scheduled = true;
            this.scheduledAction = 'Dejar de asistir';
          }
          else {
          this.scheduledAction = 'Agendar';
          }
        })
        //console.log(response);
      })
  }
  back(): void{
    this.location.back();
  }
  updateScheduleState(){
    if (this.scheduledAction === 'Agendar')
      this.router.navigate([`/artist/${this.artistId}/event/${this.eventData.id}/assistance`]);
    else{
      this.deleteEventOnAgenda();
    }
  }
  deleteEventOnAgenda(){
    this.eventAssistanceService.deleteEventAssistance(this.hobbyist.id, this.eventData.id)
      .subscribe((response:any)=>{
        console.log('Se elimino '+ response);
        this.scheduledAction = 'Agendar';
      })

  }
}
