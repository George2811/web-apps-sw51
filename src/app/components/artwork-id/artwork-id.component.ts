import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {Artwork} from "../../models/artwork";
import {ArtworksApiService} from "../../services/artworks-api.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artwork-id',
  templateUrl: './artwork-id.component.html',
  styleUrls: ['./artwork-id.component.css']
})
export class ArtworkIdComponent implements OnInit {
  artwork: any;

  constructor(private location: Location,
              private activatedrouter: ActivatedRoute, private router: Router,
              private artworksApiService: ArtworksApiService) { }

  ngOnInit(): void {
    this.retrieveArtwork(this.artwork.artistId, this.artwork.id);
  }

  retrieveArtwork(artistid: number, id: number): void {
    this.artworksApiService.getArtworkByIdAndArtistId(artistid, id).subscribe((response:any) => {
      this.artwork.push({
        title: response.content.title,
        description: response.content.description,
        cost: response.content.cost
      });
    })
    console.log(this.artwork);
    console.log("CONSUMIDO");
  }

  back(): void{
    this.location.back();
  }
}
