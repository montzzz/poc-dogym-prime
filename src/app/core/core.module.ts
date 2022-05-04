import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalStorageService } from './local-storage/local-storage.service';
import { HttpService } from './http/http.service';
import { AuthenticationService } from './authentication/authentication.service';
import { UserService } from './user/user.service';
import { CreateService } from './observable/create.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    LocalStorageService,
    HttpService,
    AuthenticationService,
    UserService,
    CreateService
  ],
})
export class CoreModule {}
