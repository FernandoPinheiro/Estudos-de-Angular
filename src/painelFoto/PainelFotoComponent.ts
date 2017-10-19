import { Component, Input } from '@angular/core';

@Component({
    selector: `PainelFoto`,
    templateUrl: `./PainelFotoComponent.html`
})
export class PainelFotoComponent{
    @Input()
    tituloFoto: string
}