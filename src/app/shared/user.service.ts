import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private api = 'https://kwm-vaccinates.s1810456009.student.kwmhgb.at/api/users';

  constructor(private http: HttpClient) {}

  getSingle(id: string): Observable<any> {
    return this.http.get(`${this.api}/${id}`).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  setAppointment(userId, vaccinationId): Observable<User> {
    return this.http
      .put(this.api + '/signup', { userId, vaccinationId })
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }
}
