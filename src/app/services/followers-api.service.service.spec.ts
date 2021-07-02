import { TestBed } from '@angular/core/testing';

import { FollowersApiService } from './followers-api.service.service';

describe('FollowersApiService', () => {
  let service: FollowersApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FollowersApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
