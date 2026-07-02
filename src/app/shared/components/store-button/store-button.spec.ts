import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreButton } from './store-button';

describe('StoreButton', () => {
  let component: StoreButton;
  let fixture: ComponentFixture<StoreButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreButton],
    }).compileComponents();

    fixture = TestBed.createComponent(StoreButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
