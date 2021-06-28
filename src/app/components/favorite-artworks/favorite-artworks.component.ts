import { Component, OnInit } from '@angular/core';
import {Artwork} from "../../models/artwork";

@Component({
  selector: 'app-favorite-artworks',
  templateUrl: './favorite-artworks.component.html',
  styleUrls: ['./favorite-artworks.component.css']
})
export class FavoriteArtworksComponent implements OnInit {

  artworks: Object[] = [
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
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
