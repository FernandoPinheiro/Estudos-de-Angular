import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(webclient: Http){
    webclient.get("http://localhost:3000/v1/fotos").subscribe(
     resposta => this.fotos = resposta.json()
     ,erro => console.log(erro) 
    )
  }

  fotos: Object[] = [];
}