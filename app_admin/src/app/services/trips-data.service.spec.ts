import { TestBed } from '@angular/core/testing';

import { TripDataService } from './trip-data.service';

describe('TripsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TripDataService = TestBed.get(TripDataService);
    expect(service).toBeTruthy();
  });
});
