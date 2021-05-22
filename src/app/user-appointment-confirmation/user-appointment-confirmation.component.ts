import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-appointment-confirmation',
  templateUrl: './user-appointment-confirmation.component.html',
  styleUrls: ['./user-appointment-confirmation.component.css'],
})
export class UserAppointmentConfirmationComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    const userId = window.localStorage.getItem('userId');

    if (userId) this.userService.getSingle(userId).subscribe((res) => (this.user = res));
  }
}
