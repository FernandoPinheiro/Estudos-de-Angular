import { FotoComponent } from './../../foto/FotoComponent';
import { Component, OnInit } from '@angular/core';
import { FotoService } from 'services/foto.service';
import { Router } from '@angular/router';


@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
  mensagem: string = ''
  _router: Router;
  
  public fotos: FotoComponent[] = [];
  
  constructor(private serice: FotoService){
    this.serice.listar().subscribe(
      resposta => this.fotos = resposta.json()
      ,erro => console.log(erro) 
     )
  }

  title = 'Fotografias';
  
  ngOnInit() {
  }
  
  remover(foto: FotoComponent){
    this.serice
      .deletar(foto)
      .subscribe(() => {
        this.fotos = this.fotos.filter(imagem => imagem._id != foto._id)
        this.mensagem = `a foto ${foto.titulo} foi deletada`
        setTimeout(()=> this.mensagem = '', 5000)
      } )
}
  
}
