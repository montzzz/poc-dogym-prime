import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'd-inputnumber',
  templateUrl: './d-inputnumber.component.html',
  styleUrls: ['./d-inputnumber.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class DInputnumberComponent implements OnInit {
  @Input()
  maxFractionDigits: number = 0;

  @Input()
  minFractionDigits: number = 0;

  @Input()
  maxlength: number = 10;

  @Input()
  name: string = '';

  constructor() {}

  ngOnInit(): void {}
}
