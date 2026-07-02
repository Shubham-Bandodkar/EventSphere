import { TestBed } from '@angular/core/testing';

import { UpcomingEvent } from './upcoming-event';

describe('UpcomingEvent', () => {
  let service: UpcomingEvent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpcomingEvent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
