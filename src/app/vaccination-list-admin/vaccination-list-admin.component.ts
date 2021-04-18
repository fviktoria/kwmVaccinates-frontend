import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Location from '../shared/location';
import { LocationService } from '../shared/location.service';
import { Vaccination } from '../shared/vaccination';
import { VaccinationService } from '../shared/vaccination.service';

@Component({
  selector: 'app-vaccination-list-admin',
  templateUrl: './vaccination-list-admin.component.html',
  styleUrls: ['./vaccination-list-admin.component.css'],
})
export class VaccinationListAdminComponent implements OnInit {
  vaccinations: Vaccination[];
  location: Location;

  constructor(
    private vs: VaccinationService,
    private ls: LocationService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    this.vs.getByLocation(params['locationId']).subscribe((res) => (this.vaccinations = res));
    this.ls.getSingle(params['locationId']).subscribe((res) => (this.location = res));
  }

  removeVaccination(id) {
    if (confirm('Confirm deletion?')) {
      this.vs.delete(id).subscribe((res) => {
        this.vaccinations.splice(this.vaccinations.indexOf(this.vaccinations.find((item) => item.id == id)), 1);
      });
    }
  }
}
