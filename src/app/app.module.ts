import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InternalPageHeaderModule } from './internal-page-header/internal-page-header.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InternalPageHeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
