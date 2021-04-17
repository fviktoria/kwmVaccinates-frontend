import { Component, OnInit } from '@angular/core';
import { LocationService } from '../shared/location.service';
import Location from '../shared/location';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css'],
})
export class LocationListComponent implements OnInit {
  constructor(private ls: LocationService) {}
  locations: Location[];

  ngOnInit(): void {
    this.ls.getAll().subscribe((res) => (this.locations = res));
  }
}
