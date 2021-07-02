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

  constructor(private location: Location, private eventsApiService: EventsApiService,private HobbyistsAPiService: HobbyistsApiService,
              private tokenStorageService: TokenStorageService,
              private activatedRouter: ActivatedRoute, private router: Router,
              private eventAssistanceService: EventAssistanceService) { }

  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser().userId;
    this.HobbyistsAPiService.getByUserId(this.currentUser).subscribe( (response: any) => {
      this.hobbyist = response;
      console.log(this.hobbyist);
    });
    this.eventId = Number(this.activatedRouter.params.subscribe( (params: any) => {
      if (params.id) {
        const id = params.id;
        const artistId = params.artistId;
        console.log('Este es el Id:'+id);
        console.log('Este es el Artist Id: '+artistId);
        this.retrieveEvent(artistId, id);
      }
    }));
  }
  goToScheduled(artistId: number, eventId: number){
    this.router.navigate([`artist/${artistId}/event/${eventId}/assistance`]);
  }
  retrieveEvent(artistid: number, id: number): void {
    this.eventsApiService.getEventByIdAndArtistId(artistid, id)
      .subscribe((response:any) => {
        this.eventData = response;
        console.log(this.eventData);
      })
  }
  scheduledEvent(eventId: number){
    this.eventAssistanceService.addEventAssistance(this.hobbyist.id, eventId)
      .subscribe( (response:any) => {
        console.log(response);
      })
  }

  back(): void{
    this.location.back();
  }
}
