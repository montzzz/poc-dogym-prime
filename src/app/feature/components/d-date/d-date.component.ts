import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'd-date',
  templateUrl: './d-date.component.html',
  styleUrls: ['./d-date.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class DDateComponent implements OnInit {
  @Input()
  dateFormat: string = '';

  @Input()
  name: string = '';

  constructor() {}

  ngOnInit(): void {}
}
