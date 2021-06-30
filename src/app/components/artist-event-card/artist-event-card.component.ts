import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-artist-event-card',
  templateUrl: './artist-event-card.component.html',
  styleUrls: ['./artist-event-card.component.css']
})
export class ArtistEventCardComponent implements OnInit {
  @Input() event: any;
  constructor() { }

  ngOnInit(): void {
  }



  priceArtwork(price : number): string{
    if (price !== 0)
      return `${price}`
    return 'free';
  }

  dateToString(date: Date): string{
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  }
}
