import {Component, OnInit} from '@angular/core';
import {ArtworksApiService} from "../../services/artworks-api.service";
import {ArtistsApiService} from "../../services/artists-api.service";
import {EventsApiService} from "../../services/events-api.service";
import {Artwork} from "../../models/artwork";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  names: string[] = ['person1','person1','person1','person1','person1','person1'];
  value = '';
  artworks: Object[] = [];

  events: Object[] = [];

  artists: Object[] = [];

  constructor(private artworkService: ArtworksApiService, private artistService: ArtistsApiService,
              private eventsService : EventsApiService) { }

  ngOnInit(): void {
    this.getAllArtworks();
      //.subscribe((data: Artwork[]) => {this.artworks=data;
        //console.log(`artworks: ${this.artworks}`);});
    this.getAllArtists();
      //.subscribe((data: any[]) => {this.artists=data;
        //console.log(`artists: ${this.artists}`);});
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
