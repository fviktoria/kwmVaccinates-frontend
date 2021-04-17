import { Component, OnInit } from '@angular/core';
import { LocationService } from '../shared/location.service';
import Location from '../shared/location';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(private ls: LocationService) {}
  locations: Location[];

  ngOnInit(): void {
    this.ls.getAll().subscribe((res) => (this.locations = res));
  }
}
