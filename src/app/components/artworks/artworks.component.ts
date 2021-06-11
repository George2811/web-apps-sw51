import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-artworks',
  templateUrl: './artworks.component.html',
  styleUrls: ['./artworks.component.css']
})
export class ArtworksComponent implements OnInit {
  @Input() artwork: any;
  @Input() event: any;

  artworks: string[] = ['Monalisa', 'La noche estrellada', 'El Beso'];

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
  typeOfCard(): string{
    if (this.artwork)
      return 'artwork';
    if (this.event)
      return 'event';
    return '';
  }

}
