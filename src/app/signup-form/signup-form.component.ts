import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VaccinationService } from '../shared/vaccination.service';
import { Vaccination } from '../shared/vaccination';
import Location from '../shared/location';
import { LocationService } from '../shared/location.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent implements OnInit {
  vaccinations: Vaccination[];
  location: Location;
  signupForm: FormGroup;

  constructor(
    private vs: VaccinationService,
    private ls: LocationService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private authService: AuthenticationService,
  ) {}

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    const userId = window.localStorage.getItem('userId');

    this.vs.getByLocation(params['locationId']).subscribe((res) => (this.vaccinations = res));
    this.ls.getSingle(params['locationId']).subscribe((res) => (this.location = res));

    this.signupForm = this.fb.group({
      appointment: ['', Validators.required],
    });
  }

  submitSignupForm() {
    const userId = parseInt(window.localStorage.userId);

    if (userId) {
      this.userService.setAppointment(userId, this.signupForm.value.appointment).subscribe((res) => {
        this.router.navigate(['confirmation']);
      });
    }
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
