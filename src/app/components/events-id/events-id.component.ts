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
  event: any

  constructor(private location: Location, private eventsApiService: EventsApiService,
              private activatedrouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.retrieveEvent(this.event.artistId, this.event.id);
  }

  retrieveEvent(artistid: number, id: number): void {
    this.eventsApiService.getEventByIdAndArtistId(artistid, id).subscribe((response:any) => {
      this.event.push({
        title: response.content.title,
        description: response.content.description,
        dateStart: response.content.dateStart,
        dateEnd: response.content.dateEnd
      });
    })
    console.log(this.event);
    console.log("CONSUMIDO");
  }

  back(): void{
    this.location.back();
  }
}
