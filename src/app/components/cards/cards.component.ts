import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LoginRequestDialogComponent} from "../login-request-dialog/login-request-dialog.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() artwork: any;
  @Input() event: any;
  @Input() artist: any;

  //artworks: string[] = ['Monalisa', 'La noche estrellada', 'El Beso'];

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }

  getRandomNumber(num:number){
    return Math.floor(Math.random() * num);
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
    if (this.artist)
      return 'artist';
    return '';
  }
  isLogged(): boolean{
    return this.router.url === '/home'? true : this.router.url === '/artist-profile';
  }
  openDialog() {
    const dialogRef = this.dialog.open(LoginRequestDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  goToArtwork(artistId:number,artworkId: number) {
    this.router.navigate([`/artist/${artistId}/artwork/${artworkId}`]);
  }

  goToEvent(artistId:number, eventId:number) {
    this.router.navigate([`/artist/${artistId}/event/${eventId}`]);
  }
}
