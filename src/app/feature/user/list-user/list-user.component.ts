import { Component, OnInit, ViewChild } from '@angular/core';

import { UserService } from '@core/user/user.service';
import { DateService } from '@core/date/date.service';
import { UserPaginated } from '@domain/user/user-list.model';
import { User } from '@domain/user/user.model';
import { Table } from 'primeng/table';
import { MenuItem, ConfirmationService } from 'primeng/api';

import { MessageServiceDogym } from '@core/message/message.service';
import { Router } from '@angular/router';
import { state } from '@angular/animations';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
})
export class ListUserComponent implements OnInit {
  itemsActions: MenuItem[];

  usersPaginated: UserPaginated[];
  selectedUser: any = null;

  loading: boolean = true;

  @ViewChild('dt') dt: Table;

  constructor(
    private _userService: UserService,
    private _confirmationService: ConfirmationService,
    private _messageService: MessageServiceDogym,
    private _dateService: DateService,
    private _router: Router
  ) {
    this.selectedUser = {
      status: 'INATIVO',
    };

    this.itemsActions = [
      {
        label: 'Visualizar',
        icon: 'pi pi-eye',
        routerLink: ['/user-create'],
      },
      {
        label: 'Treinos',
        icon: 'fa-solid fa-dumbbell',
      },
      {
        label: 'Inativar',
        icon: 'pi pi-power-off',
        command: (event: Event) => {
          this._confirmationService.confirm({
            message: 'Você tem certeza que deseja alterar o status do aluno?',
            header: 'Confirmação',
            accept: () => {
              this._userService
                .getUserById(this.selectedUser.id)
                .subscribe((ret) => {
                  const userReturned = ret.body;

                  let user: User = {
                    nome: userReturned.nome,
                    email: userReturned.email,
                    altura: userReturned.altura,
                    peso: userReturned.peso,
                    telefone: userReturned.telefone,
                    sexo: userReturned.sexo,
                    status:
                      userReturned.status === 'INACTIVE'
                        ? 'ACTIVE'
                        : 'INACTIVE',
                    perfil: userReturned.perfil,
                    nascimento: this._dateService.getDateToInsertUpdate(
                      userReturned.nascimento
                    ),
                  };

                  this._userService
                    .updateUser(this.selectedUser.id, user)
                    .subscribe(() => {
                      this.getUsersPaginated();
                      this._messageService.addMessage(
                        'success',
                        'Confirmação',
                        'Alterado o status do aluno com sucesso'
                      );
                    });
                });
            },
          });
        },
      },
    ];
  }

  ngOnInit(): void {
    // primeiro request para trazer os usuarios cadastrados
    this.getUsersPaginated();
  }

  applyGlobalFilter($event, stringVal) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  adjustLabelItemAction() {
    (this.itemsActions[0].state = {
      selectedUser: this.selectedUser,
    }),
      (this.itemsActions[2].label =
        this.selectedUser.status === 'INATIVO' ? 'Ativar' : 'Inativar');
  }

  getUsersPaginated() {
    this._userService.getUsersPaginated().subscribe((user) => {
      this.usersPaginated = user.body.content.map((item) => {
        return <UserPaginated>{
          id: item.id,
          altura: item.altura,
          countTraining: item.countTraining,
          dataHoraCadastro: item.dataHoraCadastro,
          email: item.email,
          nascimento: item.nascimento,
          nome: item.nome,
          perfil: item.perfil,
          peso: item.peso,
          sexo: item.sexo === 'MALE' ? 'MASCULINO' : 'FEMININO',
          status: item.status === 'ACTIVE' ? 'ATIVO' : 'INATIVO',
          telefone: item.telefone,
        };
      });

      this.loading = false;
    });
  }

  navigateToUserCreate() {
    this._router.navigateByUrl('/user-create');
  }
}
