import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CreateService } from '@core/observable/create.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingService } from '@core/observable/loading.service';
import { MessageServiceDogym } from '@core/message/message.service';

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.scss'],
})
export class CardCreateComponent implements OnDestroy, OnInit {
  formGroup: FormGroup;
  @Input() items: any = [];

  @Input() titleHeader: string = '';

  @ViewChild('0') firstField: ElementRef;

  loading: boolean = false;

  private loadingEventSubscription: Subscription;

  constructor(
    private _createService: CreateService,
    private _loadingService: LoadingService,
    private _router: Router,
    private _messageService: MessageServiceDogym
  ) {
    this.loadingEventSubscription = this._loadingService
      .getObservable()
      .subscribe((loading) => {
        this.loading = loading;
      });
  }

  ngOnInit(): void {
    let group = {};

    this.items.forEach((tab) => {
      tab.fields.forEach((item) => {
        group[item.formName] = new FormControl(
          { value: item.value, disabled: item.disabled },
          item.validators
        );
      });
    });

    this.formGroup = new FormGroup(group);

    setTimeout(() => {
      const joao = document.getElementById('fdp');

      console.log(joao);

      joao?.focus();
    }, 300);
  }

  onSave(event) {
    if (!this.hasErrorOnForm()) {
      this._createService.setObservable(this.formGroup);
    }
  }

  returnToUserCreate() {
    this._router.navigateByUrl('/user');
  }

  ngOnDestroy() {
    this.loadingEventSubscription.unsubscribe();
  }

  hasErrorOnForm(): boolean {
    for (const field in this.formGroup.controls) {
      const control = this.formGroup.get(field);

      if (control?.errors) {
        this._messageService.addMessage(
          'error',
          'Campo inválido',
          `Campo ${field} está inválido, verifique!`
        );

        return true;
      }
    }

    return false;
  }
}
