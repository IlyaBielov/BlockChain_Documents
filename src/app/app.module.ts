import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormForAddFileComponent } from './form-for-add-file/form-for-add-file.component';
import { NgxPrettyCheckboxModule } from 'ngx-pretty-checkbox';


@NgModule({
  declarations: [
    AppComponent,
    FormForAddFileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPrettyCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
