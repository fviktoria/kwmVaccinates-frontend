import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationListAdminComponent } from './location-list-admin.component';

describe('LocationListAdminComponent', () => {
  let component: LocationListAdminComponent;
  let fixture: ComponentFixture<LocationListAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationListAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
