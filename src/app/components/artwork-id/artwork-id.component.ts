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
  artworkData: Artwork = {} as Artwork;
  artworkId!: number


  constructor(private location: Location,
              private activatedrouter: ActivatedRoute, private router: Router,
              private artworksApiService: ArtworksApiService) { }

  ngOnInit(): void {
    this.artworkId = Number(this.activatedrouter.params.subscribe( (params: any) => {
      if (params.id) {
        const id = params.id;
        const artistId = params.artistId;
        console.log(id);
        this.retrieveArtwork(artistId, id)
        return id;
      }
    }));
  }

  retrieveArtwork(artistid: number, id: number): void {
    this.artworksApiService.getArtworkByIdAndArtistId(artistid, id)
      .subscribe((response:any) => {
        this.artworkData = response.data;
        console.log(this.artworkData);
      })
  }

  back(): void{
    this.location.back();
  }
}
