import { TestBed } from '@angular/core/testing';

import { GmpBrowserService } from './gmp-browser.service';

describe('GmpBrowserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GmpBrowserService = TestBed.get(GmpBrowserService);
    expect(service).toBeTruthy();
  });
});
