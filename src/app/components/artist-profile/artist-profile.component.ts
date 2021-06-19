import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-artist-profile',
  templateUrl: './artist-profile.component.html',
  styleUrls: ['./artist-profile.component.css']
})
export class ArtistProfileComponent implements OnInit {
  followAction: string = 'Seguir';
  followBtn: HTMLElement | null = null;
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
        title: 'event1 example',
        dateStart: new Date('06/10/21'),
        dateEnd: new Date('06/15/21'),
        cost: 50.6
      },
      {
        title: 'event2 example',
        dateStart: new Date('07/10/21'),
        dateEnd: new Date('07/15/21'),
        cost: 50.6
      },
      {
        title: 'event3 example',
        dateStart: new Date('08/10/21'),
        dateEnd: new Date('08/15/21'),
        cost: 50.6
      },
      {
        title: 'event4 example',
        dateStart: new Date('09/10/21'),
        dateEnd: new Date('09/15/21'),
        cost: 0
      },
      {
        title: 'event5 example',
        dateStart: new Date('10/10/21'),
        dateEnd: new Date('10/15/21'),
        cost: 50.6
      },
      {
        title: 'event6 example',
        dateStart: new Date('11/10/21'),
        dateEnd: new Date('11/15/21'),
        cost: 50.6
      },
      {
        title: 'event7 example',
        dateStart: new Date('12/10/21'),
        dateEnd: new Date('12/15/21'),
        cost: 50.6
      },
      {
        title: 'event8 example',
        dateStart: new Date('13/10/21'),
        dateEnd: new Date('13/15/21'),
        cost: 50.6
      }
    ],
    cardsShowing: 1,
    Index: 1
  }

  constructor() {
  }

  ngOnInit(): void {
    this.followBtn = document.getElementById('followBtn');
    this.updateCarousel(this.EventsCarousel);
    this.updateCarousel(this.ArtworksCarousel);
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

  updateCarousel(carousel: { Name: string, Showing: any[]; All: any[]; cardsShowing: number; Index: number }){
    carousel.Showing = [];
    for (let i = 0; i < carousel.cardsShowing; i++){
      carousel.Showing.push(carousel.All[(carousel.Index - 1) * carousel.cardsShowing + i])
    }
    console.log(carousel.Showing);
  }

  nextShowingElement(carousel: { Name: string, Showing: any[]; All: any[]; cardsShowing: number; Index: number }) {
    let maxIndex = carousel.All.length / carousel.cardsShowing;
    if (carousel.Index < maxIndex) {
      carousel.Index += carousel.cardsShowing;
      if (carousel.Index > maxIndex)
        carousel.Index = maxIndex;
      this.updateCarousel(carousel);
    }
  }

  backShowingElement(carousel: { Name: string, Showing: any[]; All: any[]; cardsShowing: number; Index: number }) {
    if (carousel.Index > 1) {
      carousel.Index -= carousel.cardsShowing;
      if (carousel.Index <= 0)
        carousel.Index = 1;
      this.updateCarousel(carousel);
    }
  }
}
