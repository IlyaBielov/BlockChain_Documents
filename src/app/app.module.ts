import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormForAddFileComponent } from './form-for-add-file/form-for-add-file.component';
import { NgxPrettyCheckboxModule } from 'ngx-pretty-checkbox';
import { DataPageComponent } from './data-page/data-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'data', component: DataPageComponent },
  { path: '', component: FormForAddFileComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormForAddFileComponent,
    DataPageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPrettyCheckboxModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
