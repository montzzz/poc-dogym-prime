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
        icon: 'pi pi-user',
        items: [
          { label: 'Novo', icon: 'pi pi-user-plus' },
          { label: 'Cadastrados', icon: 'pi pi-users' },
          { label: 'Treinos', icon: 'pi pi-list' }
        ]
      },
      {
        label: 'Edit',
        icon: 'fa-solid fa-dumbbell',
        items: [
          { label: 'Undo', icon: 'pi pi-refresh' },
          { label: 'Redo', icon: 'pi pi-repeat' },
        ],
      },
    ];

    console.log(this.authenticationService.isUserAuthenticated())
  }


  title = 'dogym-webapp1';
}
