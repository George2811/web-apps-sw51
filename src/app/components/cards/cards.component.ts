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
  getRandomNumberForImage(min: number, max: number): number{
    return Math.floor(Math.random() * (max - min) + min);
  }
  getImage(): string{
    return `https://picsum.photos/id/${this.getRandomNumberForImage(1060,1086)}/3900/3120`;
  }
  goToArtist(id: number): void{
    this.router.navigate([`/artist/${id}`]);
  }


}
