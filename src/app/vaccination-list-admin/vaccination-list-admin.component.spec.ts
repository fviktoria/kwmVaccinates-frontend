import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationListAdminComponent } from './vaccination-list-admin.component';

describe('VaccinationListAdminComponent', () => {
  let component: VaccinationListAdminComponent;
  let fixture: ComponentFixture<VaccinationListAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinationListAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
