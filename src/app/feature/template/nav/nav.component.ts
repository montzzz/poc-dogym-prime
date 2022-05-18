import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  items: MenuItem[];

  constructor(private _router: Router) {
    this.items = [
      {
        label: 'Início',
        icon: 'pi pi-home',
        routerLink: ['/home'],
      },
      {
        label: 'Usuários',
        icon: 'pi pi-user',
        routerLink: ['/user'],
      },
      {
        label: 'Avisos',
        icon: 'pi pi-send',
        routerLink: ['/notification'],
      },
      {
        label: 'Exercícios',
        icon: 'fa-solid fa-dumbbell',
      },
      {
        label: 'Treinos',
        icon: 'pi pi-list',
      },
      {
        label: 'Aulas',
        icon: 'fa-solid fa-person-chalkboard',
      },
      {
        label: 'Planos',
        icon: 'pi pi-wallet',
      },
      {
        label: 'Formas de pgto',
        icon: 'pi pi-credit-card',
      },
      {
        label: 'Receber',
        icon: 'fa-solid fa-hand-holding-dollar',
      },
      {
        label: 'Pagar',
        icon: 'pi pi-money-bill',
      },
    ];
  }

  ngOnInit(): void {}
}
