import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationManager } from '@domain/notification/notification-list.model';
import { NotificationService } from '@core/notification/notification.service';
import { DateService } from '@core/date/date.service';
import { Table } from 'primeng/table';
import { MenuItem, ConfirmationService } from 'primeng/api';
import { Notification } from '@domain/notification/notification.model';
import { MessageServiceDogym } from '@core/message/message.service';

@Component({
  selector: 'app-list-notification',
  templateUrl: './list-notification.component.html',
  styleUrls: ['./list-notification.component.scss'],
})
export class ListNotificationComponent implements OnInit {
  constructor(
    private _router: Router,
    private _dateService: DateService,
    private _notificationService: NotificationService,
    private _confirmationService: ConfirmationService,
    private _messageService: MessageServiceDogym
  ) {
    this.itemsActions = [
      {
        label: 'Visualizar',
        icon: 'pi pi-eye',
        routerLink: ['/notification-create'],
      },
      {
        label: 'Inativar',
        icon: 'pi pi-power-off',
        command: (event: Event) => {
          this._confirmationService.confirm({
            message: 'Você tem certeza que deseja alterar o status do aviso?',
            header: 'Confirmação',
            accept: () => {
              this._notificationService
                .getNotificationById(this.selectedNotification.id)
                .subscribe((ret) => {
                  const notificationReturned = ret.body;

                  let notification: Notification = {
                    titulo: notificationReturned.titulo,
                    observacao: notificationReturned.observacao,
                    status:
                      notificationReturned.status === 'INACTIVE'
                        ? 'ACTIVE'
                        : 'INACTIVE',
                    dataFim: this._dateService.getDateToInsertUpdate(
                      notificationReturned.dataFim
                    ),
                    dataHoraCadastro:
                      this._dateService.getDateTimeToInsertUpdate(
                        notificationReturned.dataHoraCadastro
                      ),
                  };

                  this._notificationService
                    .updateNotification(
                      this.selectedNotification.id,
                      notification
                    )
                    .subscribe(() => {
                      this.getNotificationsManager();
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

  selectedNotification: any = null;

  itemsActions: MenuItem[];

  notificationsManager: NotificationManager[];

  loading: boolean = true;

  @ViewChild('dt') dt: Table;

  ngOnInit(): void {
    // primeiro request para trazer os avisos cadastrados
    this.getNotificationsManager();
  }

  navigateToNotificationCreate() {
    this._router.navigateByUrl('/notification-create');
  }

  getNotificationsManager() {
    this._notificationService
      .getNotificationsManager()
      .subscribe((notification) => {
        this.notificationsManager = notification.body.content.map((item) => {
          return <NotificationManager>{
            id: item.id,
            dataFim: item.dataFim,
            dataHoraCadastro: item.dataHoraCadastro,
            observacao: item.observacao,
            status: item.status === 'ACTIVE' ? 'ATIVO' : 'INATIVO',
            titulo: item.titulo,
          };
        });

        this.loading = false;
      });
  }

  applyGlobalFilter($event, stringVal) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  adjustLabelItemAction() {
    (this.itemsActions[0].state = {
      selectedNotification: this.selectedNotification,
    }),
      (this.itemsActions[1].label =
        this.selectedNotification.status === 'INATIVO' ? 'Ativar' : 'Inativar');
  }
}
