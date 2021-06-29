import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-artwork-id',
  templateUrl: './artwork-id.component.html',
  styleUrls: ['./artwork-id.component.css']
})
export class ArtworkIdComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  back(): void{
    this.location.back();
  }
}
