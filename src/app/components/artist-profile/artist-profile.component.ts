import {Component, HostListener, Input, OnInit} from '@angular/core';
import {max} from "rxjs/operators";
import {ArtistProfileService} from "../../services/artist-profile.service";
import {ArtworksApiService} from "../../services/artworks-api.service";
import {EventsApiService} from "../../services/events-api.service";
import {ArtistsApiService} from "../../services/artists-api.service";
import { Router, ActivatedRoute } from '@angular/router';
import {Artist} from "../../models/artist";

@Component({
  selector: 'app-artist-profile',
  templateUrl: './artist-profile.component.html',
  styleUrls: ['./artist-profile.component.css']
})
export class ArtistProfileComponent implements OnInit {
  artist: Artist = {} as Artist;
  artistId!: number;
  isArtist: boolean = true;
  followAction: string = 'Seguir';
  followBtn: HTMLElement | null = null;
  imageUrl = "https://picsum.photos/id/1011/300";
  showContactEdit: boolean = false;
  showPhraseEdit: boolean = false;

  ArtworksCarousel = {
    Name: 'artworks',
    Showing: <any>[],
    All: [],
    cardsShowing: 3,
    Index: 1
  };

  EventsCarousel = {
    Name: 'events',
    Showing: <any>[],
    All: [],
    cardsShowing: 1,
    Index: 1
  }

  constructor(private artistProfileService: ArtistProfileService,
              private activatedrouter: ActivatedRoute, private router: Router,
              private artworksApiService: ArtworksApiService, private eventsApiService: EventsApiService,
              private artistsApiService: ArtistsApiService) {}

  ngOnInit(): void {
    this.followBtn = document.getElementById('followBtn');
    this.updateCarousel(this.EventsCarousel, 'eve', 'right');
    this.updateCarousel(this.ArtworksCarousel, 'art', 'right');
    this.isArtist = this.artistProfileService.getArtist();
    this.artistId = Number(this.activatedrouter.params.subscribe( (params: any) => {
      if (params.id) {
        const id = params.id;
        console.log(id);
        this.retrieveArtist(id);
        return id;
      }
    }));
  }

  getAllArtworksByArtistId(id: number): void{
    this.artworksApiService.getAllArtworkByArtistId(id).subscribe((response:any) => {
      this.ArtworksCarousel.Showing.push(response.data.slice(id,id+3));
    })
  }

  getAllEventsByArtistId(id: number): void{
    this.eventsApiService.getAllEventsByArtistId(id).subscribe((response:any) => {
      this.EventsCarousel.Showing.push(response.data.slice(id,id+3));
    })
  }

  retrieveArtist(id: number): void {
    this.artistsApiService.getArtistById(id)
      .subscribe((response:any) => {
        this.artist = response.data;
        console.log(this.artist);
      })
  }

  updateFollowState() {
    if (this.followAction === 'Seguir') {
      this.followAction = 'Dejar de Seguir';
      this.followBtn?.classList.add('resizeBtn');
    } else {
      this.followAction = 'Seguir';
      this.followBtn?.classList.remove('resizeBtn');
    }
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

  @HostListener('document:click', ['$event']) onDocumentClick(event: any) {
    document.getElementById('image-options')?.classList.remove('image-options-show');
    document.getElementById('contact-input-edit')?.classList.remove('edit-social-input-show');
    document.getElementById('phrase-input-edit')?.classList.remove('edit-phrase-input-show');
  }

  setImageUrl(url: any){
    this.imageUrl = url;
  }

  removeImage(){
    this.imageUrl = "https://picsum.photos/id/1011/300";
  }

  showImageEditOption(event: any) {
    document.getElementById('image-options')?.classList.add('image-options-show');
    event.stopPropagation();
  }

  ShowContactEditForm(event: any){
    document.getElementById('contact-input-edit')?.classList.add('edit-social-input-show');
    event.stopPropagation();
  }

  ShowPhraseEditForm(event: any){
    document.getElementById('phrase-input-edit')?.classList.add('edit-phrase-input-show');
    event.stopPropagation();
  }

  FormClick(event: any){
    event.stopPropagation();
  }
}
