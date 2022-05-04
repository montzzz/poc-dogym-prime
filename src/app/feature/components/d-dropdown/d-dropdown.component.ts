import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'd-dropdown',
  templateUrl: './d-dropdown.component.html',
  styleUrls: ['./d-dropdown.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class DDropdownComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  options;

  @Input()
  name: string = '';
}
