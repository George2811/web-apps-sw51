import { TestBed } from '@angular/core/testing';

import { FavoritArtoworkService } from './favorit-artowork.service';

describe('FavoritArtoworkService', () => {
  let service: FavoritArtoworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritArtoworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
