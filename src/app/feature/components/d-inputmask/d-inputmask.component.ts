import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'd-inputmask',
  templateUrl: './d-inputmask.component.html',
  styleUrls: ['./d-inputmask.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class DInputmaskComponent implements OnInit {
  @Input()
  mask: string = '';

  @Input()
  name: string = '';

  constructor() {}

  ngOnInit(): void {}
}
