import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
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
  artworkPath = 'https://perustars-api.herokuapp.com/api/artworks';
  httpOptions = {headers: new HttpHeaders({'Content-Type':'application/json'})};

  names: string[] = ['person1','person1','person1','person1','person1','person1'];
  value = '';
  artworks: Object[] = [
    {
      name: this.artworkService.getArtworkNameById(1),
      cost: this.artworkService.getArtworkCostById(1)
    },
    {
      name: this.artworkService.getArtworkNameById(2),
      cost: this.artworkService.getArtworkCostById(2)
    },
    {
      name: this.artworkService.getArtworkNameById(3),
      cost: this.artworkService.getArtworkCostById(3)
    },
    {
      name: this.artworkService.getArtworkNameById(4),
      cost: this.artworkService.getArtworkCostById(4)
    },
    {
      name: this.artworkService.getArtworkNameById(5),
      cost: this.artworkService.getArtworkCostById(5)
    },
    {
      name: this.artworkService.getArtworkNameById(6),
      cost: this.artworkService.getArtworkCostById(6)
    },
    {
      name: this.artworkService.getArtworkNameById(7),
      cost: this.artworkService.getArtworkCostById(7)
    },
    {
      name: this.artworkService.getArtworkNameById(8),
      cost: this.artworkService.getArtworkCostById(8)
    }
  ];

  events: Object[] = [
    {
      title: this.eventsService.getEventTitleById(1),
      dateStart: this.eventsService.getDateStartById(1),
      dateEnd: new Date('06/15/21'),
      cost: this.eventsService.getEventCostById(1)
    },
    {
      title: this.eventsService.getEventTitleById(2),
      dateStart: new Date('06/10/21'),
      dateEnd: new Date('06/15/21'),
      cost: this.eventsService.getEventCostById(2)
    },
    {
      title: this.eventsService.getEventTitleById(3),
      dateStart: new Date('06/10/21'),
      dateEnd: new Date('06/15/21'),
      cost: this.eventsService.getEventCostById(3)
    },
    {
      title: this.eventsService.getEventTitleById(4),
      dateStart: new Date('06/10/21'),
      dateEnd: new Date('06/15/21'),
      cost: this.eventsService.getEventCostById(4)
    },
    {
      title: this.eventsService.getEventTitleById(5),
      dateStart: new Date('06/10/21'),
      dateEnd: new Date('06/15/21'),
      cost: this.eventsService.getEventCostById(5)
    },
    {
      title: this.eventsService.getEventTitleById(6),
      dateStart: new Date('06/10/21'),
      dateEnd: new Date('06/15/21'),
      cost: this.eventsService.getEventCostById(6)
    },
    {
      title: this.eventsService.getEventTitleById(7),
      dateStart: new Date('06/10/21'),
      dateEnd: new Date('06/15/21'),
      cost: this.eventsService.getEventCostById(7)
    },
    {
      title: this.eventsService.getEventTitleById(8),
      dateStart: new Date('06/10/21'),
      dateEnd: new Date('06/15/21'),
      cost: this.eventsService.getEventCostById(8)
    }
  ];

  artists: Object[] = [
    {
      brandName: 'DaVinci',
      specialty: 'Escultor',
      numArtworks: 8,
      followers: 150
    },
    {
      brandName: 'VanGoh',
      specialty: 'Pintor',
      numArtworks: 50,
      followers: 150
    },
    {
      brandName: 'DaVinci',
      specialty: 'Escultor',
      numArtworks: 50,
      followers: 390
    },
    {
      brandName: 'VanGoh',
      specialty: 'Pintor',
      numArtworks: 15,
      followers: 250
    },
    {
      brandName: 'DaVinci',
      specialty: 'Escultor',
      numArtworks: 10,
      followers: 150
    },
    {
      brandName: 'VanGoh',
      specialty: 'Pintor',
      numArtworks: 16,
      followers: 210
    },
    {
      brandName: 'DaVinci',
      specialty: 'Escultor',
      numArtworks: 10,
      followers: 150
    },
    {
      brandName: 'VanGoh',
      specialty: 'Pintor',
      numArtworks: 16,
      followers: 210
    }
  ];

  constructor(private artworkService: ArtworksApiService, private artistService: ArtistsApiService,
              private eventsService : EventsApiService) { }

  ngOnInit(): void {
    // this.artworks;
    this.artworkService.getAllArtwork();
      //.subscribe((data: Artwork[]) => {this.artworks=data;
        //console.log(`artworks: ${this.artworks}`);});
    this.artistService.getAllArtist();
      //.subscribe((data: any[]) => {this.artists=data;
        //console.log(`artists: ${this.artists}`);});
    this.eventsService.getAllEvent();
  }

}
