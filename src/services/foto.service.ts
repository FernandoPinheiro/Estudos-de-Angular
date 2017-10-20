import { FotoComponent } from './../foto/FotoComponent';
import { Http, Headers, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class FotoService{

    url = 'http://localhost:3000/v1/fotos/'
    cabecalho: Headers

    constructor(private webclient: Http){
        this.cabecalho = new Headers()
        this.cabecalho.append("Content-Type", "application/json")
    }

    listar(){
        return this.webclient.get(this.url)
    }

    cadastrar(foto: FotoComponent){
    
        return this.webclient
          .post(
            this.url, 
            JSON.stringify(foto), 
            {headers: this.cabecalho}
          )
    }

    deletar(foto: FotoComponent) : Observable<Response> {
        return this.webclient.delete(this.url+foto._id);
    }

    obterFoto(id): Observable<Response>{
        return this.webclient.get(this.url+id)
    }

    atualizar(foto) : Observable<Response>{
        return this.webclient.put(
            this.url+foto._id, 
            JSON.stringify(foto), 
            {headers: this.cabecalho}
          )
    }
}