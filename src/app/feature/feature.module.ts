import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { FeatureRoutingModule } from './feature-routing.module';
import { LoginComponent } from './login/login.component';
import { CoreModule } from './../core/core.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    SharedModule,
    CoreModule,
    FormsModule
  ]
})
export class FeatureModule { }
