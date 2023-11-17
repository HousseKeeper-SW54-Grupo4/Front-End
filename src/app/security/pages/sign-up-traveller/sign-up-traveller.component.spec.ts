import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpTravellerComponent } from './sign-up-traveller.component';

describe('SignUpTravellerComponent', () => {
  let component: SignUpTravellerComponent;
  let fixture: ComponentFixture<SignUpTravellerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpTravellerComponent]
    });
    fixture = TestBed.createComponent(SignUpTravellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
