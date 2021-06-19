import { TestBed } from '@angular/core/testing';

import { SpecialtiesApiService } from './specialties-api.service';

describe('SpecialtiesApiService', () => {
  let service: SpecialtiesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialtiesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
