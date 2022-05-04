import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateService } from '@core/observable/create.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.scss'],
})
export class CardCreateComponent implements OnInit {
  formGroup: FormGroup;
  @Input() itens: any = [];

  @Input() titleHeader: string = '';

  constructor(private _createService: CreateService, private _router: Router) {}

  ngOnInit(): void {
    let group = {};

    this.itens.forEach((item) => {
      group[item.formName] = new FormControl(
        { value: item.value, disabled: item.disabled },
        item.validators
      );
    });

    this.formGroup = new FormGroup(group);
  }

  onSave(event) {
    this._createService.setObservable(this.formGroup);
  }

  returnToUserCreate() {
    this._router.navigateByUrl('/user');
  }
}
