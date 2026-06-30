import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyEventsphere } from './why-eventsphere';

describe('WhyEventsphere', () => {
  let component: WhyEventsphere;
  let fixture: ComponentFixture<WhyEventsphere>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyEventsphere],
    }).compileComponents();

    fixture = TestBed.createComponent(WhyEventsphere);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
