import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingEventCard } from './upcoming-event-card';

describe('UpcomingEventCard', () => {
  let component: UpcomingEventCard;
  let fixture: ComponentFixture<UpcomingEventCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingEventCard],
    }).compileComponents();

    fixture = TestBed.createComponent(UpcomingEventCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
