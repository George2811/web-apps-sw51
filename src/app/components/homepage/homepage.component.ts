import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  names: string[] = ['person1','person1','person1','person1','person1','person1'];
  value = '';

  constructor() { }

  ngOnInit(): void {
  }

}
