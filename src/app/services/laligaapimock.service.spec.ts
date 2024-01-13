import { TestBed } from '@angular/core/testing';

import { LaligaapimockService } from './laligaapimock.service';

describe('LaligaapimockService', () => {
  let service: LaligaapimockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaligaapimockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
