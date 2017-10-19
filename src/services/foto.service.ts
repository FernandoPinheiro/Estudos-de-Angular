import { FotoComponent } from './../foto/FotoComponent';
import { Http, Headers } from "@angular/http";
import { Injectable } from "@angular/core";



@Injectable()
export class FotoService{
    constructor(private webclient: Http){
        
    }

    listar(){
        return this.webclient.get("http://localhost:3000/v1/fotos")
    }

    cadastrar(foto: FotoComponent){
        let cabecalho = new Headers()
        cabecalho.append("Content-Type", "application/json")
    
        return this.webclient
          .post(
            "http://localhost:3000/v1/fotos", 
            JSON.stringify(foto), 
            {headers: cabecalho}
          )
    }

    deletar(foto: FotoComponent){
        console.log('chegou no serviço')
    }


}