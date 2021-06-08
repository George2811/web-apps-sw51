import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pre-menu',
  templateUrl: './pre-menu.component.html',
  styleUrls: ['./pre-menu.component.css']
})
export class PreMenuComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
