import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [ButtonModule, CardModule, InputTextModule, MenuModule],
})
export class SharedModule {}
