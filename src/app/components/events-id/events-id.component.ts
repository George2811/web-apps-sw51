import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {EventsApiService} from "../../services/events-api.service";
import { Router, ActivatedRoute } from '@angular/router';
import {Event} from "../../models/event";

@Component({
  selector: 'app-events-id',
  templateUrl: './events-id.component.html',
  styleUrls: ['./events-id.component.css']
})
export class EventsIdComponent implements OnInit {
  eventId!: number;
  eventData: Event = {} as Event;

  constructor(private location: Location, private eventsApiService: EventsApiService,
              private activatedrouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.eventId = Number(this.activatedrouter.params.subscribe( (params: any) => {
      if (params.id) {
        const id = params.id;
        const artistId = params.artistId;
        console.log(id);
        this.retrieveEvent(artistId, id)
        return id;
      }
    }));
  }

  retrieveEvent(artistid: number, id: number): void {
    this.eventsApiService.getEventByIdAndArtistId(artistid, id)
      .subscribe((response:any) => {
        this.eventData = response.data;
        console.log(this.eventData);
      })
  }

  back(): void{
    this.location.back();
  }
}
