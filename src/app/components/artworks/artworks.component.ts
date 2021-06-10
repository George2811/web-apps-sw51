import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artworks',
  templateUrl: './artworks.component.html',
  styleUrls: ['./artworks.component.css']
})
export class ArtworksComponent implements OnInit {

  artworks: string[] = ['Monalisa', 'La noche estrellada', 'El Beso'];

  constructor() { }

  ngOnInit(): void {
  }

}
