import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  viewsNotAllowed : string[] = ['/','/about','/login', '/register', '/recover'];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  inSession(): boolean{
    for(const view of this.viewsNotAllowed){
      if(this.router.url === view)
        return false;
    }
    return true;
  }

}
