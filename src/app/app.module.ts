import { FotoService } from 'services/foto.service';
import { roteamento } from './app.routes';
import { FotoModule } from './../foto/FotoModule';
import { PainelFotoModule } from './../painelFoto/PainelFotoModule';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule, HttpModule, PainelFotoModule, FotoModule, roteamento, FormsModule
  ],
  providers: [FotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
