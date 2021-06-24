import {Component, HostListener, Input, OnInit} from '@angular/core';
import {max} from "rxjs/operators";
import {ArtistProfileService} from "../../services/artist-profile.service";

@Component({
  selector: 'app-artist-profile',
  templateUrl: './artist-profile.component.html',
  styleUrls: ['./artist-profile.component.css']
})
export class ArtistProfileComponent implements OnInit {
  isArtist: boolean = true;
  followAction: string = 'Seguir';
  followBtn: HTMLElement | null = null;
  imageUrl = "https://picsum.photos/id/1011/300";
  showContactEdit: boolean = false;
  showPhraseEdit: boolean = false;
  ArtworksCarousel = {
    Name: 'artworks',
    Showing: <any>[],
    All: [
      {
        name: 'Vacation Itinerary',
        cost: 801,
      },
      {
        name: 'Kitchen Remodel',
        cost: 261.6
      },
      {
        name: 'Kitchen Remodel',
        cost: 494
      },
      {
        name: 'Kitchen Remodel',
        cost: 0.00,
      },
      {
        name: 'Kitchen Remodel',
        cost: 50.5
      },
      {
        name: 'Kitchen Remodel',
        cost: 70.5
      },
      {
        name: 'Kitchen Example',
        cost: 40.5
      },
      {
        name: 'Last Example',
        cost: 40.5
      }
    ],
    cardsShowing: 3,
    Index: 1
  };
  EventsCarousel = {
    Name: 'events',
    Showing: <any>[],
    All: [
      {
        title: 'Event1 Example',
        dateStart: new Date('06/10/21'),
        dateEnd: new Date('06/15/21'),
        cost: 50.6
      },
      {
        title: 'Event2 Example',
        dateStart: new Date('07/10/21'),
        dateEnd: new Date('07/15/21'),
        cost: 50.6
      },
      {
        title: 'Event3 Example',
        dateStart: new Date('08/10/21'),
        dateEnd: new Date('08/15/21'),
        cost: 50.6
      },
      {
        title: 'Event4 Example',
        dateStart: new Date('09/10/21'),
        dateEnd: new Date('09/15/21'),
        cost: 0
      },
      {
        title: 'Event5 Example',
        dateStart: new Date('10/10/21'),
        dateEnd: new Date('10/15/21'),
        cost: 50.6
      },
      {
        title: 'Event6 Example',
        dateStart: new Date('11/10/21'),
        dateEnd: new Date('11/15/21'),
        cost: 50.6
      },
      {
        title: 'Event7 Example',
        dateStart: new Date('12/10/21'),
        dateEnd: new Date('12/15/21'),
        cost: 50.6
      },
      {
        title: 'Event8 Example',
        dateStart: new Date('13/10/21'),
        dateEnd: new Date('13/15/21'),
        cost: 50.6
      }
    ],
    cardsShowing: 1,
    Index: 1
  }

  constructor(private artistProfileService: ArtistProfileService) {
  }

  ngOnInit(): void {
    this.followBtn = document.getElementById('followBtn');
    this.updateCarousel(this.EventsCarousel, 'eve', 'right');
    this.updateCarousel(this.ArtworksCarousel, 'art', 'right');
    this.isArtist = this.artistProfileService.getArtist();
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
