import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {}

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  isAdmin() {
    return this.authService.isAdmin();
  }

  getLoginLabel() {
    if (this.isLoggedIn()) {
      return 'Logout';
    } else {
      return 'Login';
    }
  }

  logout() {
    return this.authService.logout();
  }
}
