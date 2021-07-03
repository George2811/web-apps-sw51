import {Component, Input, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {Artwork} from "../../models/artwork";
import {ArtworksApiService} from "../../services/artworks-api.service";
import {Router, ActivatedRoute} from '@angular/router';
import {TokenStorageService} from "../../services/token-storage.service";
import {HobbyistsApiService} from "../../services/hobbyists-api.service";
import {FavoriteArtworkApiService} from "../../services/favorite-artwork-api.service";
import {Hobbyist} from "../../models/hobbyist";

@Component({
  selector: 'app-artwork-id',
  templateUrl: './artwork-id.component.html',
  styleUrls: ['./artwork-id.component.css']
})
export class ArtworkIdComponent implements OnInit {
  artwork: Artwork = { } as Artwork;
  hobbyist: Hobbyist = { } as Hobbyist;
  color: string = "";

  constructor(private location: Location,
              private activatedRouter: ActivatedRoute, private router: Router,
              private artworksApiService: ArtworksApiService,
              private tokenStorageService: TokenStorageService,
              private favoriteArtworkApiService: FavoriteArtworkApiService,
              private hobbyistApiService: HobbyistsApiService) {
  }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params: any) => {
      this.getArtworkById(params.id, params.artistId);
    });

    this.getHobbyistByUserId(this.tokenStorageService.getUser().userId);
  }

  getArtworkById(id:number, artistId:number) {
    this.artworksApiService.getArtworkByIdAndArtistId(artistId, id).subscribe((response: any) => {
      this.artwork = response;
    });
  }

  getHobbyistByUserId(userId: number) {
    this.hobbyistApiService.getByUserId(userId).subscribe((response: any) => {
      this.hobbyist = response;
      this.getAllArtworksByHobbyistId(this.hobbyist.id);
    });
  }

  getAllArtworksByHobbyistId(hobbystId:number) {
    this.favoriteArtworkApiService.getFavoriteArtwork(hobbystId).subscribe((response: any) => {
      console.log(response);
      this.color = "";
      for(let i = 0; i < response.content.length; i++){
        if (this.artwork.id === response.content[i].id) {
          this.color = 'warn';
          break;
        }
      }
    });
  }

  postFavoriteArtwork(hobbyistId: number, artworkId: number) {
    this.favoriteArtworkApiService.addFavoriteArtwork(hobbyistId, artworkId).subscribe((response: any) => {
      console.log(response);
      this.color = 'warn';
    });
  }

  deleteFavoriteArtwork(hobbyistId: number, artworkId: number) {
    this.favoriteArtworkApiService.deleteFavoriteArtwork(hobbyistId, artworkId).subscribe((response:any) => {
      console.log(response);
      this.color = '';
    });
  }

  favoriteInteraction() {
    if (this.color === 'warn')
      this.deleteFavoriteArtwork(this.hobbyist.id, this.artwork.id);
    else
      this.postFavoriteArtwork(this.hobbyist.id, this.artwork.id);
  }

  back(): void {
    this.location.back();
  }
}
