import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  logIn: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  inSession(){
    this.logIn = !this.logIn;
  }
}
