import { TestBed } from '@angular/core/testing';

import { FavoriteArtworkApiService } from './favorite-artwork-api.service';

describe('FavoritArtoworkService', () => {
  let service: FavoriteArtworkApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteArtworkApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
