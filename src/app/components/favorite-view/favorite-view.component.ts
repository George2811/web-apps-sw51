import { Component, OnInit } from '@angular/core';
import {FavoriteArtworkApiService} from "../../services/favorite-artwork-api.service";
import {TokenStorageService} from "../../services/token-storage.service";
import {HobbyistsApiService} from "../../services/hobbyists-api.service";
import {Hobbyist} from "../../models/hobbyist";

@Component({
  selector: 'app-favorite-view',
  templateUrl: './favorite-view.component.html',
  styleUrls: ['./favorite-view.component.css']
})
export class FavoriteViewComponent implements OnInit {
  ArtworksCarousel = {
    Name: 'artworks',
    Showing: <any>[],
    All: <any>[],
    cardsShowing: 3,
    Index: 1
  };
  hobbyist: Hobbyist = {} as Hobbyist;

  constructor(private tokenStorageService: TokenStorageService,
              private hobbyistApiService: HobbyistsApiService,
              private favoriteArtworkApiService: FavoriteArtworkApiService) { }

  ngOnInit(): void {
    this.getHobbyistByUserId(this.tokenStorageService.getUser().userId);
  }

  getHobbyistByUserId(userId: number) {
    this.hobbyistApiService.getHobbyistByUserId(userId).subscribe((response: any) => {
      this.hobbyist = response;
      this.getAllArtworksByHobbyistId(this.hobbyist.id);
    });
  }

  getAllArtworksByHobbyistId(hobbystId:number) {
    this.favoriteArtworkApiService.getFavoriteArtwork(hobbystId).subscribe((response: any) => {
      console.log(response);
      for(let i = 0; i < response.content.length; i++){
        this.ArtworksCarousel.All.push({
          name: response.content[i].title,
          description: response.content[i].description,
          cost: response.content[i].cost,
          artistId: response.content[i].artistId,
          id: response.content[i].id
        });
      }
      this.updateCarousel(this.ArtworksCarousel, 'art', 'right');
    });
  }

  updateCarousel(carousel: { Name: string, Showing: any[]; All: any[]; cardsShowing: number; Index: number }, _class: string, direction: string) {
    let currentItems = document.getElementsByClassName(_class);
    for (let i = 0; i < currentItems.length; i++) {
      currentItems[i].classList.add(`carousel-item-out-${direction === 'right' ? 'left' : 'right'}`);
    }

    setTimeout(function () {
      carousel.Showing = [];
      for (let i = 0; i < carousel.cardsShowing; i++) {
        let item = carousel.All[(carousel.Index - 1) * carousel.cardsShowing + i];
        if (item)
          carousel.Showing.push(item);
      }
      currentItems = document.getElementsByClassName(_class);
    }, 300);

    setTimeout(function () {
      for (let i = 0; i < currentItems.length; i++) {
        currentItems[i].classList.add(`carousel-item-enter-${direction === 'right' ? 'right' : 'left'}`);
      }
    }, 300);

    setTimeout(function () {
      currentItems = document.getElementsByClassName(_class);
      for (let i = 0; i < currentItems.length; i++) {
        currentItems[i].classList.remove(`carousel-item-enter-${direction === 'right' ? 'right' : 'left'}`);
        currentItems[i].classList.remove("hide-c-item");
      }
    }, 400);
  }

  nextShowingElement(carousel: { Name: string, Showing: any[]; All: any[]; cardsShowing: number; Index: number }, _class: string) {
    if (carousel.All.length === carousel.cardsShowing)
      return;

    let maxIndex = carousel.All.length / carousel.cardsShowing;
    if (maxIndex > Math.trunc(maxIndex)) {
      maxIndex = Math.trunc(maxIndex);
      maxIndex++;
    }
    if (carousel.Index < maxIndex) {
      carousel.Index++;
      if (carousel.Index > maxIndex)
        carousel.Index = maxIndex;
    }
    else if (carousel.Index === maxIndex)
      carousel.Index = 1;

    this.updateCarousel(carousel, _class, 'right');
  }

  backShowingElement(carousel: { Name: string, Showing: any[]; All: any[]; cardsShowing: number; Index: number }, _class: string) {
    if (carousel.All.length === carousel.cardsShowing)
      return;

    if (carousel.Index > 1) {
      carousel.Index--;
      if (carousel.Index <= 0)
        carousel.Index = 1;
    }

    else if (carousel.Index === 1) {
      let maxIndex = carousel.All.length / carousel.cardsShowing;
      if (maxIndex > Math.trunc(maxIndex)) {
        maxIndex = Math.trunc(maxIndex);
        maxIndex++;
      }
      carousel.Index = maxIndex;
    }

    this.updateCarousel(carousel, _class, 'left');
  }
}
