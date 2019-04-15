import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberButtonComponent } from './number-button/number-button.component';
import { OperationButtonComponent } from './operation-button/operation-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberButtonComponent,
    OperationButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
