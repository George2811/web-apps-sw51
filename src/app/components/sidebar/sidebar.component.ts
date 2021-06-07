import { Component, OnInit } from '@angular/core';

export interface Section {
  name: string;
  updated: Date;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  artists: Section[] = [
    {
      name: 'Artist1',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Artist2',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Artist3',
      updated: new Date('1/28/16'),
    }
  ];
  events: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
