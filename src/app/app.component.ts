import { Component } from '@angular/core';
import { AuthenticationService } from '@core/authentication/authentication.service';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: MenuItem[];

  constructor(
    public authenticationService: AuthenticationService
  ) { 
    this.items = [
      {
        label: 'Usuários',
        icon: 'pi pi-user'
      },
      {
        label: 'Avisos',
        icon: 'pi pi-send'
      },
      {
        label: 'Exercícios',
        icon: 'fa-solid fa-dumbbell'
      },
      {
        label: 'Treinos',
        icon: 'pi pi-list'
      },
      {
        label: 'Aulas',
        icon: 'fa-solid fa-person-chalkboard'
      },
      {
        label: 'Planos',
        icon: 'pi pi-wallet'
      },
      {
        label: 'Formas de pgto',
        icon: 'pi pi-credit-card'
      },
      {
        label: 'Receber',
        icon: 'fa-solid fa-hand-holding-dollar'
      },
      {
        label: 'Pagar',
        icon: 'pi pi-money-bill'
      }
    ];
  }


  title = 'dogym-webapp1';
}
