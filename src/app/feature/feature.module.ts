import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FeatureRoutingModule } from './feature-routing.module';
import { LoginComponent } from './login/login.component';
import { CoreModule } from './../core/core.module';
import { HomeComponent } from './home/home.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { NavComponent } from './template/nav/nav.component';
import { HeaderComponent } from './template/header/header.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { CardCreateComponent } from './components/card-create/card-create.component';
import { DButtonComponent } from './components/d-button/d-button.component';
import { DInputComponent } from './components/d-input/d-input.component';
import { DInputmaskComponent } from './components/d-inputmask/d-inputmask.component';
import { DDateComponent } from './components/d-date/d-date.component';
import { DDropdownComponent } from './components/d-dropdown/d-dropdown.component';
import { DDatetimeComponent } from './components/d-datetime/d-datetime.component';
import { DInputnumberComponent } from './components/d-inputnumber/d-inputnumber.component';
import { ListNotificationComponent } from './notification/list-notification/list-notification.component';
import { NotificationCreateComponent } from './notification/notification-create/notification-create.component';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    ListUserComponent,
    NavComponent,
    HeaderComponent,
    UserCreateComponent,
    CardCreateComponent,
    DButtonComponent,
    DInputComponent,
    DInputmaskComponent,
    DDateComponent,
    DDropdownComponent,
    DDatetimeComponent,
    DInputnumberComponent,
    ListNotificationComponent,
    NotificationCreateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FeatureRoutingModule,
    SharedModule,
    CoreModule,
    FormsModule,
  ],
  exports: [LoginComponent, NavComponent, HeaderComponent],
})
export class FeatureModule {}
