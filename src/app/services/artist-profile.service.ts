import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtistProfileService {
  isArtist: boolean = true;
  constructor() { }

  setArtist(isArtist: boolean) {
    this.isArtist = isArtist;
  }
  getArtist(): boolean{
    return this.isArtist;
  }
}
