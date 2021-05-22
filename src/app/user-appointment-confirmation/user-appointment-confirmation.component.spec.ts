import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAppointmentConfirmationComponent } from './user-appointment-confirmation.component';

describe('UserAppointmentConfirmationComponent', () => {
  let component: UserAppointmentConfirmationComponent;
  let fixture: ComponentFixture<UserAppointmentConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAppointmentConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAppointmentConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
