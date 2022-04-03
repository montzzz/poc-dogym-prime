import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FeatureModule } from './feature/feature.module';
import { FeatureRoutingModule } from './feature/feature-routing.module';
import { SlideMenuModule } from 'primeng/slidemenu';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FeatureModule,
    FeatureRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SlideMenuModule,
    ToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
