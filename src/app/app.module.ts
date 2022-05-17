import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { FeatureModule } from './feature/feature.module';
import { FeatureRoutingModule } from './feature/feature-routing.module';
import { SlideMenuModule } from 'primeng/slidemenu';
import { ToolbarModule } from 'primeng/toolbar';
import { HeaderComponent } from '@feature/template/header/header.component';
import { NavComponent } from '@feature/template/nav/nav.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { DatePipe } from '@angular/common';
import { ErrorInterceptor } from '@core/interceptors/error.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    FeatureModule,
    FeatureRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SlideMenuModule,
    ToolbarModule,
    OverlayPanelModule,
    ButtonModule,
    ToastModule,
  ],
  providers: [
    ConfirmationService,
    MessageService,
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
