import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationAdminComponent } from './vaccination-admin.component';

describe('VaccinationAdminComponent', () => {
  let component: VaccinationAdminComponent;
  let fixture: ComponentFixture<VaccinationAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinationAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
