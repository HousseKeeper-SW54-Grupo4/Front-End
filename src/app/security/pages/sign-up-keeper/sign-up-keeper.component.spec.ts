import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpKeeperComponent } from './sign-up-keeper.component';

describe('SignUpKeeperComponent', () => {
  let component: SignUpKeeperComponent;
  let fixture: ComponentFixture<SignUpKeeperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpKeeperComponent]
    });
    fixture = TestBed.createComponent(SignUpKeeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
