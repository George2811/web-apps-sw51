import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.css']
})
export class TermsAndConditionsComponent implements OnInit {
  rout: boolean = true;
  constructor(private router: Router, private _location: Location) { }

  ngOnInit(): void {
  }
  idPopUpTheOrigin(): boolean {
    return this.router.url === '/register';
  }
  goBack() {
    this._location.back();
  }


}
