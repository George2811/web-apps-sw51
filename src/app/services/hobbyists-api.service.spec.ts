import { TestBed } from '@angular/core/testing';

import { HobbyistsApiService } from './hobbyists-api.service';

describe('HobbyistsApiService', () => {
  let service: HobbyistsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HobbyistsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
