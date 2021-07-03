import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {TokenStorageService} from "../../services/token-storage.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  viewsNotAllowed : string[] = ['/','/about','/login', '/register', '/recover'];
  private roles: string[] | undefined;
  isLoggedIn = false;
  username: string | undefined;

  constructor(private tokenStorageService:TokenStorageService,private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getUser();
    if(this.isLoggedIn) {
      const  user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.username = user.username;
    }
  }
  logout(): void{
    this.tokenStorageService.signOut();
    window.location.reload();
  }


}
