import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '@feature/login/login.component';
import { HomeComponent } from '@feature/home/home.component';
import { ListUserComponent } from '@feature/user/list-user/list-user.component';
import { UserCreateComponent } from '@feature/user/user-create/user-create.component';
import { ListNotificationComponent } from '@feature/notification/list-notification/list-notification.component';
import { NotificationCreateComponent } from '@feature/notification/notification-create/notification-create.component';

import { AuthGuard } from './../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'user',
    component: ListUserComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'user-create',
    component: UserCreateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'notification',
    component: ListNotificationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'notification-create',
    component: NotificationCreateComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
