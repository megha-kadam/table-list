import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { listComponent } from 'src/shared/component/list/list.component';
import { tableCmponent } from 'src/shared/component/table/table.component';

@NgModule({
  declarations: [
    listComponent,
    tableCmponent,
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
