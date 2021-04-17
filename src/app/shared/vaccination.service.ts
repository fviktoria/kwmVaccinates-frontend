import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Vaccination } from './vaccination';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class VaccinationService {
  private api = 'http://kwm-vaccinates.s1810456009.student.kwmhgb.at/api';

  constructor(private http: HttpClient) {}

  getByLocation(locationId: string): Observable<Array<Vaccination>> {
    return this.http
      .get(`${this.api}/vaccinations/location/${locationId}`)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }
}
