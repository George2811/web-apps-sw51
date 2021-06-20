import {Component, OnInit} from '@angular/core';
import {max} from "rxjs/operators";

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

  constructor() {
  }

  ngOnInit(): void {
    this.followBtn = document.getElementById('followBtn');
    this.updateCarousel(this.EventsCarousel, 'eve');
    this.updateCarousel(this.ArtworksCarousel, 'art');
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

  updateCarousel(carousel: { Name: string, Showing: any[]; All: any[]; cardsShowing: number; Index: number }, _class: string) {
    let currentItems = document.getElementsByClassName(_class);
    for (let i = 0; i < currentItems.length; i++) {
      currentItems[i].classList.add('carousel-item-out');
    }

    setTimeout(function () {
      carousel.Showing = [];
      for (let i = 0; i < carousel.cardsShowing; i++) {
        carousel.Showing.push(carousel.All[(carousel.Index - 1) * carousel.cardsShowing + i])
      }
    }, 400);

    setTimeout(function () {
      currentItems = document.getElementsByClassName(_class);
      for (let i = 0; i < currentItems.length; i++) {
        currentItems[i].classList.remove('carousel-item-enter');
      }
    }, 500);
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
      this.updateCarousel(carousel, _class);
    }
    //console.log('maxIndex: ' + maxIndex);
    //console.log('index: ' + carousel.Index);
  }

  backShowingElement(carousel: { Name: string, Showing: any[]; All: any[]; cardsShowing: number; Index: number }, _class: string) {
    if (carousel.Index > 1) {
      carousel.Index--;
      if (carousel.Index <= 0)
        carousel.Index = 1;
      this.updateCarousel(carousel, _class);
    }
  }
}
