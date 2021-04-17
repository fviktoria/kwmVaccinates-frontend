import { Injectable } from '@angular/core';
import Location from '../shared/location';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  locations: Location[];

  constructor() {
    this.locations = [new Location(1, 'Marien Apotheke', 'Schmalzhofgasse', '1', '1060', 'Wien')];
  }

  getAll() {
    return this.locations;
  }
}
