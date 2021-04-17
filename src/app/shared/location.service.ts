import { Injectable } from '@angular/core';
import Location from '../shared/location';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  locations: Location[];

  constructor() {
    this.locations = [new Location(1, 'Marien Apotheke', 'Schmalzhofgasse', '1', 'Wien', '1060')];
  }

  getAll() {
    return this.locations;
  }

  getSingle(locationId: string) {
    return this.locations.find((item) => item.id === parseInt(locationId));
  }
}
