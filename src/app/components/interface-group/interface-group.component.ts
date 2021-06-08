import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-interface-group',
  templateUrl: './interface-group.component.html',
  styleUrls: ['./interface-group.component.css']
})
export class InterfaceGroupComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
