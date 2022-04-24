import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder,FormControl } from '@angular/forms';
import { UserService } from '@core/user/user.service';

import { Gender } from '@domain/user/user-gender.model';
import { User } from '@domain/user/user.model';
import { Status } from '@domain/shared/status.model';
import { DatePipe } from '@angular/common';
import { MessageServiceDogym } from '@core/message/message.service';
import { Router } from '@angular/router';
import { DateService } from '@core/date/date.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
})
export class UserCreateComponent implements OnInit {
  genders: Gender[];
  status: Status[];

  inserting: boolean = true;
  labelUser: string = 'Novo';

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

  userForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private datepipe: DatePipe,
    private _userService: UserService,
    private _messageService: MessageServiceDogym,
    private _router: Router,
    private _dateService: DateService
  ) {
    // receive the user to update from state
    const userToUpdate = history.state.selectedUser;

    if (userToUpdate) {
      this.inserting = false;
      this.labelUser = userToUpdate ? 'Alterando' : 'Incluindo';
      this.userInserting.id = userToUpdate.id;
    }

    this.userForm = this.formBuilder.group({
      nome: [userToUpdate ? userToUpdate.nome : '', Validators.required],
      email: [
        userToUpdate ? userToUpdate.email : '',
        [Validators.required, Validators.email],
      ],
      telefone: [
        userToUpdate ? userToUpdate.telefone : '',
        Validators.required,
      ],
      nascimento: [
        userToUpdate ? userToUpdate.nascimento : '',
        Validators.required,
      ],
      sexo: [
        userToUpdate
          ? {
              name:
                userToUpdate.sexo === 'MASCULINO' ? 'Masculino' : 'Feminino',
              code: userToUpdate.sexo === 'MASCULINO' ? 'MALE' : 'FEMALE',
            }
          : '',
        Validators.required,
      ],
      status: [
        userToUpdate
          ? {
              name: userToUpdate.status,
              code: userToUpdate.status === 'ATIVO' ? 'ACTIVE' : 'INACTIVE',
            }
          : { name: 'Ativo', code: 'ACTIVE' },
        Validators.required,
      ],
      dataHoraCadastro: 
        new FormControl({value: userToUpdate
          ? new Date(
              this._dateService.getDateTimeToInsertUpdate(
                userToUpdate.dataHoraCadastro
              )
            )
          : new Date(), disabled: true},
        Validators.required),
      altura: [userToUpdate ? userToUpdate.altura : '', Validators.required],
      peso: [userToUpdate ? userToUpdate.peso : '', Validators.required],
    });
  }


  ngOnInit(): void {
    this.genders = [
      { name: 'Masculino', code: 'MALE' },
      { name: 'Feminino', code: 'FEMALE' },
    ];
    this.status = [
      { name: 'Ativo', code: 'ACTIVE' },
      { name: 'Inativo', code: 'INACTIVE' },
    ];
  }

  test() {
    this.userInserting.nome = this.userForm.get('nome').value;
    this.userInserting.altura = this.userForm.get('altura').value;
    this.userInserting.email = this.userForm.get('email').value;
    this.userInserting.nascimento = this.datepipe.transform(
      this.userForm.get('nascimento').value,
      'yyyy-MM-dd'
    )!;
    this.userInserting.peso = this.userForm.get('peso').value;
    this.userInserting.sexo = this.userForm.get('sexo').value.code;
    this.userInserting.status = this.userForm.get('status').value.code;
    this.userInserting.telefone = this.userForm.get('telefone').value;
    this.userInserting.senha = '123456';
    this.userInserting.dataHoraCadastro = this.datepipe.transform(
      this.userForm.get('dataHoraCadastro').value,
      'yyyy-MM-dd HH:mm:ss'
    )!;
    this.userInserting.perfil = 'USER';

    this._userService
      .createOrUpdateUser(this.userInserting, this.inserting)
      .subscribe(() => {
        this._messageService.addMessage(
          'success',
          'Confirmação',
          'Aluno cadastrado com sucesso'
        );

        this.returnToUserCreate();
      });
  }

  returnToUserCreate() {
    this._router.navigateByUrl('/user');
  }
}
