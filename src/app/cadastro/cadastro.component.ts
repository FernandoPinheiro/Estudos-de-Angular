import { FotoService } from 'services/foto.service';
import { Http, Headers } from '@angular/http';
import { FotoComponent } from './../../foto/FotoComponent';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  title = "Cadastro de Fotografia";
  foto = new FotoComponent()
  _webclient: Http
  _router: Router;

  constructor(webClient: Http, router:Router, private service: FotoService) { 
    this._webclient = webClient
    this._router = router;
  }

  ngOnInit() {
  }

  salvar(submit: Event){
    submit.preventDefault()
    this.service.cadastrar(this.foto).subscribe(
      response => {
        this._router.navigate(['/'])
      }
    )
  }

}
