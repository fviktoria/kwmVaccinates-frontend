import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Location from '../shared/location';
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

  constructor(private vs: VaccinationService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    this.vs.getByLocation(params['locationId']).subscribe((res) => (this.vaccinations = res));
  }
}
