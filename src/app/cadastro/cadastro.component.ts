import { FiltroPorTitulo } from './../search.pipe';
import { Response } from '@angular/http';
import { FotoService } from 'services/foto.service';
import { Http, Headers } from '@angular/http';
import { FotoComponent } from './../../foto/FotoComponent';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  title = "Cadastro de Fotografia";
  foto = new FotoComponent()
  _webclient: Http
  _router: Router
  formCadastro: FormGroup

  constructor(webClient: Http, 
              router:Router, 
              private service: FotoService, 
              private route: ActivatedRoute,
              private formBuilder: FormBuilder
            ) { 
    this._webclient = webClient
    this._router = router;

    this.formCadastro = formBuilder.group({
      titulo: ['', Validators.required ],
      url: ['', Validators.required ],
      descricao: ['', Validators.required]
    })

    this.route.params.subscribe(
        parametros => {
          parametros.id && this.service.obterFoto(parametros['id']).subscribe(
            resposta => this.foto = resposta.json()
          )
        }
    )
  }

  ngOnInit() {
  }

  salvar(submit: Event){
    submit.preventDefault()

    console.log(this.foto._id)

    if (this.foto._id){
      this.service.atualizar(this.foto).subscribe(
        response => {
          this._router.navigate(['/'])
        }
       )
    }else{
      this.service.cadastrar(this.foto).subscribe(
        response => {
          this._router.navigate(['/'])
        }
      )
    }
  }
}
