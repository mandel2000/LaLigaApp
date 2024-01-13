import { TestBed } from '@angular/core/testing';

import { LaligaapiService } from './laligaapi.service';

describe('LaligaapiService', () => {
  let service: LaligaapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaligaapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
