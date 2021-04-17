import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VaccinationService } from '../shared/vaccination.service';
import { Vaccination } from '../shared/vaccination';
import Location from '../shared/location';
import { LocationService } from '../shared/location.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent implements OnInit {
  vaccinations: Vaccination[];
  location: Location;

  constructor(private vs: VaccinationService, private ls: LocationService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    this.vs.getByLocation(params['locationId']).subscribe((res) => (this.vaccinations = res));
    this.ls.getSingle(params['locationId']).subscribe((res) => (this.location = res));
  }
}
