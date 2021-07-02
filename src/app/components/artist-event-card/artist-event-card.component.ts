import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-artist-event-card',
  templateUrl: './artist-event-card.component.html',
  styleUrls: ['./artist-event-card.component.css']
})
export class ArtistEventCardComponent implements OnInit {
  @Input() event: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToEvent(artistId: number, eventId: number) {
    this.router.navigate([`/artist/${artistId}/event/${eventId}`]);
  }


  priceArtwork(price : number): string{
    if (price !== 0)
      return `${price}`
    return 'free';
  }
}
