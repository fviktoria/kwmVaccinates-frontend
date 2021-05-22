import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { retry } from 'rxjs/operators';

interface Token {
  exp: number;
  user: {
    id: string;
    isAdmin: boolean;
  };
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private api = 'https://kwm-vaccinates.s1810456009.student.kwmhgb.at/api/auth';

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    return this.http.post(`${this.api}/login`, {
      email: email,
      password: password,
    });
  }

  public getCurrentUserId() {
    return Number.parseInt(localStorage.getItem('userId'));
  }

  public setLocalStorage(token: string) {
    const decodedToken = jwt_decode(token) as Token;
    localStorage.setItem('token', token);
    localStorage.setItem('userId', decodedToken.user.id);
  }

  logout() {
    this.http.post(`${this.api}/logout`, {});
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.router.navigate(['/']);
  }

  public isLoggedIn() {
    if (localStorage.getItem('token')) {
      let token: string = localStorage.getItem('token');
      const decodedToken = jwt_decode(token) as Token;
      let expirationDate: Date = new Date(0);
      expirationDate.setUTCSeconds(decodedToken.exp);
      if (expirationDate < new Date()) {
        localStorage.removeItem('token');
        return false;
      }
      return true;
    } else {
      return false;
    }
  }

  public isAdmin() {
    if (localStorage.getItem('token')) {
      let token: string = localStorage.getItem('token');
      const decodedToken = jwt_decode(token) as Token;
      let isAdmin = decodedToken.user.isAdmin;
      return isAdmin;
    } else {
      return false;
    }
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }
}
