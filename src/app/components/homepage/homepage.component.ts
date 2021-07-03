import {Component, OnInit} from '@angular/core';
import {ArtworksApiService} from "../../services/artworks-api.service";
import {ArtistsApiService} from "../../services/artists-api.service";
import {EventsApiService} from "../../services/events-api.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  //names: string[] = ['person1','person1','person1','person1','person1','person1'];
  value = '';
  artworks: Array<any> = [];

  events: Array<any> = [];

  artists: Array<any> = [];

  constructor(private artworkService: ArtworksApiService, private artistService: ArtistsApiService,
              private eventsService : EventsApiService) { }

  ngOnInit(): void {
    this.getAllArtworks();
    this.getAllArtists();
    this.getAllEvents()
  }

  getAllArtworks(): void {
    this.artworkService.getAllArtwork().subscribe((response: any) => {
      for(let i = 0; i < response.content.length; i++) {
        this.artworks.push({
          name: response.content[i].title,
          description: response.content[i].description,
          cost: response.content[i].cost,
          artistId: response.content[i].artistId,
          id: response.content[i].id
        });
      }
        console.log(this.artworks)
        console.log("CONSUMIDO");
    })
  }

  getAllArtists(): void{
    this.artistService.getAllArtist().subscribe((response:any) => {
      for(let i = 0; i < response.content.length; i++) {
        this.artists.push({
          brandName: response.content[i].brandName,
          phrase: response.content[i].phrase,
          firstName: response.content[i].firstName,
          lastName: response.content[i].lastName,
          specialtyName:response.content[i].specialtyName,
          id: response.content[i].id
        });
      }
    })
    console.log(this.artists);
    console.log("CONSUMIDO");
  }

  getAllEvents(): void{
    this.eventsService.getAllEvent().subscribe((response:any) => {
      for(let i = 0; i < response.content.length; i++) {
        this.events.push({
          title: response.content[i].title,
          dateStart: response.content[i].dateStart,
          dateEnd: response.content[i].dateEnd,
          cost: response.content[i].cost,
          id: response.content[i].id,
          artistId: response.content[i].artistId
        });
      }
    })
    console.log(this.events);
    console.log("CONSUMIDO");
  }
}
