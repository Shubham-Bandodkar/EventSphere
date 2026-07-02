import { TestBed } from '@angular/core/testing';

import { HowItWorks } from './how-it-works';

describe('HowItWorks', () => {
  let service: HowItWorks;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HowItWorks);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
