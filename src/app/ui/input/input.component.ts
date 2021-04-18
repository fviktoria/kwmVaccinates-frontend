import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  constructor() {}

  @Input() name: string;
  @Input() id: string;
  @Input() type: 'text' | 'email' | 'phone' | 'date' | 'time';

  ngOnInit(): void {}
}
