import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LoginRequestDialogComponent} from "../login-request-dialog/login-request-dialog.component";

@Component({
  selector: 'app-artworks',
  templateUrl: './artworks.component.html',
  styleUrls: ['./artworks.component.css']
})
export class ArtworksComponent implements OnInit {
  @Input() artwork: any;
  @Input() event: any;
  @Input() artist: any;

  artworks: string[] = ['Monalisa', 'La noche estrellada', 'El Beso'];

  constructor(public dialog: MatDialog) { }

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
    if (this.artist)
      return 'artist';
    return '';
  }
  openDialog() {
    const dialogRef = this.dialog.open(LoginRequestDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
