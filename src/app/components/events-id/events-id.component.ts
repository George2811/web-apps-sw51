import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-events-id',
  templateUrl: './events-id.component.html',
  styleUrls: ['./events-id.component.css']
})
export class EventsIdComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  back(): void{
    this.location.back();
  }
}
