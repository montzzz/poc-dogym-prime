import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators } from '@angular/forms';
import { UserService } from '@core/user/user.service';

import { Gender } from '@domain/user/user-gender.model';
import { User } from '@domain/user/user.model';
import { UserType } from '@domain/user/user-type.model';
import { Status } from '@domain/shared/status.model';
import { DatePipe } from '@angular/common';
import { MessageServiceDogym } from '@core/message/message.service';
import { Router } from '@angular/router';
import { DateService } from '@core/date/date.service';
import { CreateService } from '@core/observable/create.service';
import { LoadingService } from '@core/observable/loading.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
})
export class UserCreateComponent implements OnDestroy, OnInit {
  private createEventSubscription: Subscription;

  loading: boolean = false;

  genders: Gender[] = [
    { name: 'Masculino', code: 'MALE' },
    { name: 'Feminino', code: 'FEMALE' },
  ];

  userType: UserType[] = [
    { name: 'Aluno', code: 'USER' },
    { name: 'Professor', code: 'MASTER' },
  ];

  userInserting: User = {
    id: undefined,
    nome: undefined,
    email: undefined,
    altura: undefined,
    peso: undefined,
    telefone: undefined,
    sexo: undefined,
    status: undefined,
    perfil: undefined,
    nascimento: undefined,
    dataHoraCadastro: undefined,
  };

  userToUpdate = history.state.selectedUser;

  inserting: boolean = this.userToUpdate ? false : true;

  titleCard: string = this.userToUpdate ? 'Alterando aluno' : 'Novo aluno';

  userTemplate = [
    {
      title: 'Principal',
      fields: [
        {
          type: 'text',
          label: 'Nome',
          size: 'col-6',
          value: this.userToUpdate ? this.userToUpdate.nome : '',
          disabled: false,
          validators: Validators.required,
          formName: 'nome',
        },
        {
          type: 'text',
          label: 'E-mail',
          size: 'col-6',
          value: this.userToUpdate ? this.userToUpdate.email : '',
          disabled: false,
          validators: [Validators.required, Validators.email],
          formName: 'email',
        },
        {
          type: 'inputmask',
          label: 'Telefone',
          mask: '(99) 99999-9999',
          size: 'col-2',
          value: this.userToUpdate ? this.userToUpdate.telefone : '',
          disabled: false,
          validators: Validators.required,
          formName: 'telefone',
        },
        {
          type: 'date',
          label: 'Nascimento',
          dateFormat: 'dd/mm/yy',
          size: 'col-2',
          value: this.userToUpdate
            ? new Date(
                this._dateService.getDateToList(this.userToUpdate.nascimento)
              )
            : '',
          disabled: false,
          validators: Validators.required,
          formName: 'nascimento',
        },
        {
          type: 'dropdown',
          label: 'Sexo',
          options: this.genders,
          size: 'col-2',
          value: this.userToUpdate
            ? {
                name:
                  this.userToUpdate.sexo === 'MASCULINO'
                    ? 'Masculino'
                    : 'Feminino',
                code:
                  this.userToUpdate.sexo === 'MASCULINO' ? 'MALE' : 'FEMALE',
              }
            : {
                name: 'Masculino',
                code: 'MALE',
              },
          disabled: false,
          validators: Validators.required,
          formName: 'sexo',
        },
        {
          type: 'dropdown',
          label: 'Tipo',
          options: this.userType,
          size: 'col-2',
          value: this.userToUpdate
            ? {
                name:
                  this.userToUpdate.perfil === 'MASTER' ? 'Professor' : 'Aluno',
                code: this.userToUpdate.perfil === 'MASTER' ? 'MASTER' : 'USER',
              }
            : {
                name: 'Aluno',
                code: 'USER',
              },
          disabled: false,
          validators: Validators.required,
          formName: 'perfil',
        },
        {
          type: 'datetime',
          label: 'Data e hora de cadastro',
          dateFormat: 'dd/mm/yy',
          size: 'col-4',
          value: this.userToUpdate
            ? new Date(
                this._dateService.getDateTimeToInsertUpdate(
                  this.userToUpdate.dataHoraCadastro
                )
              )
            : new Date(),
          disabled: true,
          validators: Validators.required,
          formName: 'dataHoraCadastro',
        },
        {
          type: 'inputnumber',
          label: 'Altura (CM)',
          maxFractionDigits: 0,
          maxlength: 3,
          size: 'col-1',
          value: this.userToUpdate ? this.userToUpdate.altura : '',
          disabled: false,
          validators: Validators.required,
          formName: 'altura',
        },
        {
          type: 'inputnumber',
          label: 'Peso (KG)',
          minFractionDigits: 2,
          maxFractionDigits: 2,
          maxlength: 6,
          size: 'col-1',
          value: this.userToUpdate ? this.userToUpdate.peso : '',
          disabled: false,
          validators: Validators.required,
          formName: 'peso',
        },
      ],
    },
  ];

  constructor(
    private _userService: UserService,
    private _messageService: MessageServiceDogym,
    private _router: Router,
    private _dateService: DateService,
    private _createService: CreateService,
    private _loadingService: LoadingService,
    private _datePipe: DatePipe
  ) {
    this.createEventSubscription = this._createService
      .getObservable()
      .subscribe((userForm) => {
        this.save(userForm);
      });
  }

  ngOnInit(): void {}

  save(userForm) {
    this._loadingService.setObservable(true);

    this.userInserting.id = this.inserting ? undefined : this.userToUpdate.id;
    this.userInserting.nome = userForm.get('nome').value;
    this.userInserting.altura = userForm.get('altura').value;
    this.userInserting.email = userForm.get('email').value;
    this.userInserting.nascimento = this._datePipe.transform(
      userForm.get('nascimento').value,
      'yyyy-MM-dd'
    )!;
    this.userInserting.peso = userForm.get('peso').value;
    this.userInserting.sexo = userForm.get('sexo').value.code;
    this.userInserting.status = this.inserting
      ? 'ACTIVE'
      : this.getStatus(this.userToUpdate.status);
    this.userInserting.telefone = userForm.get('telefone').value;
    this.userInserting.senha = '123456';
    this.userInserting.dataHoraCadastro = this._datePipe.transform(
      userForm.get('dataHoraCadastro').value,
      'yyyy-MM-dd HH:mm:ss'
    )!;
    this.userInserting.perfil = userForm.get('perfil').value.code;

    this._userService
      .createOrUpdateUser(this.userInserting, this.inserting)
      .subscribe(() => {
        this._messageService.addMessage(
          'success',
          'Confirmação',
          this.inserting
            ? 'Aluno cadastrado com sucesso'
            : 'Aluno alterado com sucesso'
        );

        this._loadingService.setObservable(false);

        this.returnToUserCreate();
      });
  }

  returnToUserCreate() {
    this._router.navigateByUrl('/user');
  }

  ngOnDestroy() {
    this.createEventSubscription.unsubscribe();
  }

  private getStatus(status: string) {
    return status === 'ATIVO' ? 'ACTIVE' : 'INACTIVE';
  }
}
