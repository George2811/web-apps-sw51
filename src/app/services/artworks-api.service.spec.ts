import { TestBed } from '@angular/core/testing';

import { ArtworksApiService } from './artworks-api.service';

describe('ArtworksApiService', () => {
  let service: ArtworksApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtworksApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
