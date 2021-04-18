import { Component, OnInit } from '@angular/core';
import { LocationService } from '../shared/location.service';
import Location from '../shared/location';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VaccinationFactory } from '../shared/vaccination-factory';
import { ActivatedRoute, Router } from '@angular/router';
import { VaccinationService } from '../shared/vaccination.service';
import { VaccinationAdminErrorMessages } from './vaccination-admin-error-messages';
import { Vaccination } from '../shared/vaccination';

@Component({
  selector: 'app-vaccination-admin',
  templateUrl: './vaccination-admin.component.html',
  styleUrls: ['./vaccination-admin.component.css'],
})
export class VaccinationAdminComponent implements OnInit {
  locations: Location[];
  vaccinationAdminForm: FormGroup;
  vaccination = VaccinationFactory.empty();
  errors: { [key: string]: string } = {};
  isUpdatingVaccination = false;
  locationId: string;

  constructor(
    public ls: LocationService,
    public vs: VaccinationService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.ls.getAll().subscribe((res) => (this.locations = res));

    const vaccinationId = this.route.snapshot.params['vaccinationId'];

    if (vaccinationId) {
      this.isUpdatingVaccination = true;
      this.vs.getSingle(vaccinationId).subscribe((vaccination) => {
        this.vaccination = vaccination;
        this.initVaccination();
      });
    }
    this.initVaccination();

    this.locationId = this.route.snapshot.params['locationId'];
  }

  initVaccination() {
    console.log(this.vaccination);

    this.vaccinationAdminForm = this.fb.group({
      id: this.vaccination.id,
      date: [this.vaccination.date, Validators.required],
      from: [this.vaccination.from, Validators.required],
      to: [this.vaccination.to, Validators.required],
      maxPatients: [this.vaccination.maxPatients, Validators.required],
      location: this.vaccination.location,
      location_id: this.vaccination.location ? this.vaccination.location.id : this.locationId,
    });
    this.vaccinationAdminForm.statusChanges.subscribe(() => this.updateErrorMessages());
  }

  updateErrorMessages() {
    console.log('Is invalid? ' + this.vaccinationAdminForm.invalid);
    this.errors = {};
    for (const message of VaccinationAdminErrorMessages) {
      const control = this.vaccinationAdminForm.get(message.forControl);
      if (
        control &&
        control.dirty &&
        control.invalid &&
        control.errors[message.forValidator] &&
        !this.errors[message.forControl]
      ) {
        this.errors[message.forControl] = message.text;
      }
    }
  }

  submitForm() {
    const vaccination: Vaccination = VaccinationFactory.fromObject(this.vaccinationAdminForm.value);
    console.log(vaccination);

    if (this.isUpdatingVaccination) {
      this.vs.update(vaccination).subscribe((res) => {
        this.router.navigate(['../../../../admin', vaccination.location.id, 'vaccinations'], {
          relativeTo: this.route,
        });
      });
    } else {
      this.vs.create(vaccination).subscribe((res) => {
        this.vaccination = VaccinationFactory.empty();
        this.vaccinationAdminForm.reset(VaccinationFactory.empty());
        this.router.navigate(['../../../../admin', vaccination.location_id, 'vaccinations'], {
          relativeTo: this.route,
        });
      });
    }
  }
}
