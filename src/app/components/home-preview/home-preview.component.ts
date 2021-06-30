import { Component, OnInit } from '@angular/core';
import {ArtworksApiService} from "../../services/artworks-api.service";
import {ArtistsApiService} from "../../services/artists-api.service";
import {EventsApiService} from "../../services/events-api.service";

@Component({
  selector: 'app-home-preview',
  templateUrl: './home-preview.component.html',
  styleUrls: ['./home-preview.component.css']
})
export class HomePreviewComponent implements OnInit {
  artworks: Array<any> = [];

  events: Array<any> = [];

  artists: Array<any> = [];

  constructor(private artworkService: ArtworksApiService, private artistService: ArtistsApiService,
              private eventsService : EventsApiService) { }

  ngOnInit(): void {
    this.getAllArtworks();
    this.getAllArtists();
    this.getAllEvents();
  }

  getAllArtworks(): void {
    this.artworkService.getAllArtwork().subscribe((response:any) => {
      this.artworks.push(response.data.slice(0,8));
    })
  }

  getAllArtists(): void{
    this.artistService.getAllArtist().subscribe((response:any) => {
      this.artists = response.data.slice(0,8);
    })
  }

  getAllEvents(): void{
    this.eventsService.getAllEvent().subscribe((response:any) => {
      this.events = response.data.slice(0,8);
    })
  }
}
