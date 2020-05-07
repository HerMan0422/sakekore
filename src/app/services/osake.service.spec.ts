import { TestBed } from '@angular/core/testing';

import { OsakeService } from './osake.service';

describe('OsakeService', () => {
  let service: OsakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OsakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
