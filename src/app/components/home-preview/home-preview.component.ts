import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-preview',
  templateUrl: './home-preview.component.html',
  styleUrls: ['./home-preview.component.css']
})
export class HomePreviewComponent implements OnInit {
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

  events: Object[] = [
    {
      title: 'event1 example',
      dateStart: new Date('06/10/21'),
      dateEnd: new Date('06/15/21'),
      cost: 50.6
    },
    {
      title: 'event2 example',
      dateStart: new Date('06/10/21'),
      dateEnd: new Date('06/15/21'),
      cost: 50.6
    },
    {
      title: 'event3 example',
      dateStart: new Date('06/10/21'),
      dateEnd: new Date('06/15/21'),
      cost: 50.6
    },
    {
      title: 'event4 example',
      dateStart: new Date('06/10/21'),
      dateEnd: new Date('06/15/21'),
      cost: 0
    },
    {
      title: 'event5 example',
      dateStart: new Date('06/10/21'),
      dateEnd: new Date('06/15/21'),
      cost: 50.6
    },
    {
      title: 'event6 example',
      dateStart: new Date('06/10/21'),
      dateEnd: new Date('06/15/21'),
      cost: 50.6
    },
    {
      title: 'event7 example',
      dateStart: new Date('06/10/21'),
      dateEnd: new Date('06/15/21'),
      cost: 50.6
    },
    {
      title: 'event8 example',
      dateStart: new Date('06/10/21'),
      dateEnd: new Date('06/15/21'),
      cost: 50.6
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
