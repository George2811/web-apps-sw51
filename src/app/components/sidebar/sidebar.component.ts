import { Component, OnInit } from '@angular/core';
import {ArtistsApiService} from "../../services/artists-api.service";
import {EventsApiService} from "../../services/events-api.service";
import {TokenStorageService} from "../../services/token-storage.service";
import {Hobbyist} from "../../models/hobbyist";
import {HobbyistsApiService} from "../../services/hobbyists-api.service";
import {FollowsApiService} from "../../services/follows-api.service";
import {EventAssistanceService} from "../../services/event-assistance.service";

export interface Section {
  name: string;
  updated: Date;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  artists: Array<any> = [];
  events: Array<any> = [];
  hobbyist: Hobbyist = {} as Hobbyist;

  constructor(private tokenStorageService: TokenStorageService, private hobbyistApiService: HobbyistsApiService,
              private followsApiService: FollowsApiService, private eventAssistanceService: EventAssistanceService) {
  }

  ngOnInit(): void {
    this.getHobbyistByUserId(this.tokenStorageService.getUser().userId);

  }

  getHobbyistByUserId(userId: number) {
    this.hobbyistApiService.getHobbyistByUserId(userId).subscribe((response: any) => {
      this.hobbyist = response;
      this.getAllFollowedArtistsByHobbyistId(this.hobbyist.id);
      this.getEventAssistance(this.hobbyist.id);
    });
  }

  getAllFollowedArtistsByHobbyistId(hobbyistId: number) {
    this.followsApiService.getAllFollowedArtistsByHobbyistId(hobbyistId).subscribe((response: any) => {
      for (let i = 0; i < response.content.length; i++) {
        this.artists.push({
          name: response.content[i].brandName,
          updated: Date.now()
        });
      }
      console.log(this.artists);
    });
  }

  getEventAssistance(hobbyistId: number) {
    this.eventAssistanceService.getEventAssistance(hobbyistId).subscribe((response: any) => {
      for (let i = 0; i < response.content.length; i++) {
        this.events.push({
          name: response.content[i].title,
          updated: Date.now()
        });
      }
      console.log(response);
    });
  }
}
