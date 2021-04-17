import { Component, OnInit, Input } from '@angular/core';
import Location from '../shared/location';

@Component({
  selector: 'div.app-location-list-item',
  templateUrl: './location-list-item.component.html',
  styleUrls: ['./location-list-item.component.css'],
})
export class LocationListItemComponent implements OnInit {
  constructor() {}

  @Input() location: Location;

  ngOnInit(): void {}
}
