import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'd-datetime',
  templateUrl: './d-datetime.component.html',
  styleUrls: ['./d-datetime.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class DDatetimeComponent implements OnInit {
  @Input()
  dateFormat: string = '';

  @Input()
  name: string = '';

  @Input()
  readOnlyInput: boolean = false;

  @Input()
  showIcon: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
