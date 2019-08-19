import { TestBed } from '@angular/core/testing';

import { RecipiService } from './recipi.service';

describe('RecipiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipiService = TestBed.get(RecipiService);
    expect(service).toBeTruthy();
  });
});
