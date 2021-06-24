import { TestBed } from '@angular/core/testing';

import { ArtistProfileService } from './artist-profile.service';

describe('ArtistProfileService', () => {
  let service: ArtistProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
