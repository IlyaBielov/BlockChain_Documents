import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormForAddFileComponent } from './form-for-add-file/form-for-add-file.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NgxPrettyCheckboxModule } from 'ngx-pretty-checkbox';


@NgModule({
  declarations: [
    AppComponent,
    FormForAddFileComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxPrettyCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
