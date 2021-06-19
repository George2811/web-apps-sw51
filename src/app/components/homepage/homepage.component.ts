import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  names: string[] = ['person1','person1','person1','person1','person1','person1'];
  value = '';
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

  artists: Object[] = [
    {
      brandName: 'DaVinci',
      specialty: 'Escultor',
      numArtworks: 8,
      followers: 150
    },
    {
      brandName: 'VanGoh',
      specialty: 'Pintor',
      numArtworks: 50,
      followers: 150
    },
    {
      brandName: 'DaVinci',
      specialty: 'Escultor',
      numArtworks: 50,
      followers: 390
    },
    {
      brandName: 'VanGoh',
      specialty: 'Pintor',
      numArtworks: 15,
      followers: 250
    },
    {
      brandName: 'DaVinci',
      specialty: 'Escultor',
      numArtworks: 10,
      followers: 150
    },
    {
      brandName: 'VanGoh',
      specialty: 'Pintor',
      numArtworks: 16,
      followers: 210
    },
    {
      brandName: 'DaVinci',
      specialty: 'Escultor',
      numArtworks: 10,
      followers: 150
    },
    {
      brandName: 'VanGoh',
      specialty: 'Pintor',
      numArtworks: 16,
      followers: 210
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
