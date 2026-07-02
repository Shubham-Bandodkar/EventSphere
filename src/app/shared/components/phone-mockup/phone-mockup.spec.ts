import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneMockup } from './phone-mockup';

describe('PhoneMockup', () => {
  let component: PhoneMockup;
  let fixture: ComponentFixture<PhoneMockup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneMockup],
    }).compileComponents();

    fixture = TestBed.createComponent(PhoneMockup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
