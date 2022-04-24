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

@NgModule({
  declarations: [LoginComponent, HomeComponent, ListUserComponent, NavComponent, HeaderComponent, UserCreateComponent],
  imports: [
    CommonModule,
    RouterModule,
    FeatureRoutingModule,
    SharedModule,
    CoreModule,
    FormsModule,
  ],
  exports: [LoginComponent, NavComponent, HeaderComponent]
})
export class FeatureModule {}
