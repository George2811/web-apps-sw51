import { TestBed } from '@angular/core/testing';

import { FollowsApiService } from './follows-api.service';

describe('FollowsApiService', () => {
  let service: FollowsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FollowsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
