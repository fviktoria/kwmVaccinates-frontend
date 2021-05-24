import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../shared/user';
import { UserService } from '../shared/user.service';
import { Vaccination } from '../shared/vaccination';
import { VaccinationService } from '../shared/vaccination.service';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.css'],
})
export class RegisteredUsersComponent implements OnInit {
  vaccinationId: string;
  signedUpUsers: User[];
  vaccination: Vaccination;

  constructor(private route: ActivatedRoute, private userService: UserService, private vs: VaccinationService) {}

  ngOnInit(): void {
    this.vaccinationId = this.route.snapshot.params['vaccinationId'];
    this.userService.getByAppointment(this.vaccinationId).subscribe((res) => (this.signedUpUsers = res));

    this.vs.getSingle(this.vaccinationId).subscribe((vaccination) => {
      this.vaccination = vaccination;
    });
  }

  setVaccinationStatus(id, status) {
    console.log('vaccinate', id);
    this.userService.setVaccinationStatus(id, status).subscribe((res) => {
      console.log('successfully vaccinated user', res);
    });
  }
}
