import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];

  constructor() {
    this.items = [
      {
        label: 'Perfil',
        icon: 'pi pi-user-edit',
      },
      {
        label: 'Sair',
        icon: 'pi pi-power-off'
      }
    ];
  }

  ngOnInit(): void {}
}
