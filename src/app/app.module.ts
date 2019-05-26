import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormForAddFileComponent } from './form-for-add-file/form-for-add-file.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NgxPrettyCheckboxModule } from 'ngx-pretty-checkbox';
import { DataPageComponent } from './data-page/data-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'data', component: DataPageComponent },
  { path: '', component: FormForAddFileComponent },
  { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormForAddFileComponent,
    DataPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxPrettyCheckboxModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
