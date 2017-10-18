import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FotoModule } from '../foto/FotoModule';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FotoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
