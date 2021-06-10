import { TestBed } from '@angular/core/testing';

import { SpecialtysApiService } from './specialtys-api.service';

describe('SpecialtysApiService', () => {
  let service: SpecialtysApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialtysApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
