import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'd-button',
  templateUrl: './d-button.component.html',
  styleUrls: ['./d-button.component.scss'],
})
export class DButtonComponent implements OnInit {
  @Input()
  class: string = '';

  @Input()
  type: string = '';

  @Input()
  label: string = '';

  @Input()
  icon: string = '';

  @Input()
  inlineStyle: string = '';

  @Input()
  formName: string = '';

  @Input()
  iconPos: any = 'left';

  @Input()
  disabled: boolean = false;

  @Input()
  loading: boolean = false;

  @Output()
  public clickOutput = new EventEmitter<MouseEvent>();

  public handleClick(event: MouseEvent) {
    this.clickOutput.emit(event);
  }

  constructor() {}

  ngOnInit(): void {
    this.class = this.getClassName();
  }

  getClassName(): string {
    switch (this.class) {
      case 'primary':
        return 'p-button-raised';
      case 'secondary':
        return 'p-button-raised p-button-secondary';
      case 'info':
        return 'p-button-raised p-button-info';
      case 'warn':
        return 'p-button-raised p-button-warning';
      case 'help':
        return 'p-button-raised p-button-help';
      case 'danger':
        return 'p-button-raised p-button-danger';
    }

    return '';
  }
}
