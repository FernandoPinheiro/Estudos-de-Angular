import { Component, Input } from '@angular/core';

@Component({
    selector: `foto`,
    template: `<img width="600" src="{{url}}" [alt]="titulo" class="img-responsive center-block" />`
})
export class FotoComponent{
    @Input()
    url: string = ''
    
    @Input()
    titulo: string = ''

    descricao: string = ''

    _id: string = ''
}