import { TestBed } from '@angular/core/testing';

import { IsNotActiveService } from './is-not-active.service';

describe('IsNotActiveService', () => {
  let service: IsNotActiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsNotActiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
