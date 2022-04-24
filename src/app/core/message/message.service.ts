import { Injectable } from '@angular/core';

import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class MessageServiceDogym {
  constructor(private messageService: MessageService) {}

  addMessage(severity: string, summary: string, detail: string) {
    this.messageService.add({
      severity: severity,
      summary: summary,
      detail: detail,
    });
  }
}
