import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {EventsApiService} from "../../services/events-api.service";
import { Router, ActivatedRoute } from '@angular/router';
import {Event} from "../../models/event";
import {TokenStorageService} from "../../services/token-storage.service";

@Component({
  selector: 'app-events-id',
  templateUrl: './events-id.component.html',
  styleUrls: ['./events-id.component.css']
})
export class EventsIdComponent implements OnInit {
  currentUser: any;
  eventId!: number;
  eventData: Event = {} as Event;

  constructor(private location: Location, private eventsApiService: EventsApiService,
              private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
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

  back(): void{
    this.location.back();
  }
}
