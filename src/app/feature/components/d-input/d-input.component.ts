import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'd-input',
  templateUrl: './d-input.component.html',
  styleUrls: ['./d-input.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class DInputComponent implements OnInit {
  @Input()
  type: string = '';

  @Input()
  name: string = '';

  constructor() {}

  ngOnInit(): void {}
}
