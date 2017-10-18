import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PainelFotoComponent } from 'painelFoto/PainelFotoComponent';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpModule, PainelFotoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
