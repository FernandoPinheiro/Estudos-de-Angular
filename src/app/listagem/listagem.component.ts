import { FotoComponent } from './../../foto/FotoComponent';
import { Component, OnInit } from '@angular/core';
import { FotoService } from 'services/foto.service';


@Component({
  selector: 'listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  constructor(private serice: FotoService){
    this.serice.listar().subscribe(
      resposta => this.fotos = resposta.json()
      ,erro => console.log(erro) 
     )
  }

  fotos: Object[] = [];
  title = 'Fotografias';
  
  ngOnInit() {
  }

  remover(foto: FotoComponent){
    this.serice.deletar(foto)
  }

}
