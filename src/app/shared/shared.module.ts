import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { SlideMenuModule } from 'primeng/slidemenu';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { DividerModule } from 'primeng/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    ButtonModule,
    CardModule,
    InputTextModule,
    MenuModule,
    SlideMenuModule,
    ToolbarModule,
    TableModule,
    OverlayPanelModule,
    TieredMenuModule,
    ConfirmDialogModule,
    CalendarModule,
    DropdownModule,
    InputNumberModule,
    DividerModule,
    FormsModule,
    ReactiveFormsModule,
    InputMaskModule,
    TabViewModule
  ],
})
export class SharedModule {}
