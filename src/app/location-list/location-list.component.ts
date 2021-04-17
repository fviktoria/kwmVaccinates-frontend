import { Component, OnInit } from '@angular/core';
import Location from '../shared/location';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css'],
})
export class LocationListComponent implements OnInit {
  locations: Location[];

  constructor() {}

  ngOnInit(): void {
    this.locations = [new Location(1, 'Marien Apotheke', 'Schmalzhofgasse', '1', '1060', 'Wien')];
  }
}
