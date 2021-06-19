import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-profile',
  templateUrl: './artist-profile.component.html',
  styleUrls: ['./artist-profile.component.css']
})
export class ArtistProfileComponent implements OnInit {
  followAction: string = 'Seguir';
  followBtn: HTMLElement | null = null;
  constructor() { }

  ngOnInit(): void {
    this.followBtn = document.getElementById('followBtn');
  }

  updateFollowState(){
    if (this.followAction === 'Seguir') {
      this.followAction = 'Dejar de Seguir';
      this.followBtn?.classList.add('resizeBtn');
    }
    else {
      this.followAction = 'Seguir';
      this.followBtn?.classList.remove('resizeBtn');
    }
  }
}
