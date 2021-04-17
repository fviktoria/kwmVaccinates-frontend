import { Injectable } from '@angular/core';
import Location from './location';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class LocationService {
  private api = 'http://kwm-vaccinates.s1810456009.student.kwmhgb.at/api';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Array<Location>> {
    return this.http.get(`${this.api}/locations`).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  getSingle(locationId: string): Observable<Location> {
    return this.http
      .get<Location>(`${this.api}/locations/${locationId}`)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }

  /*
  create(book: Book): Observable<any> {
    return this.http.post(`${this.api}/book`, book).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }
  update(book: Book): Observable<any> {
    return this.http.put(`${this.api}/book/${book.isbn}`, book).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }
  remove(isbn: string): Observable<any> {
    return this.http.delete(`${this.api}/book/${isbn}`).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }
  */
  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }
}
