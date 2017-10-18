import { PainelFotoComponent } from './PainelFotoComponent';
import { NgModule } from '@angular/core';
import { FotoComponent } from 'foto/FotoComponent';

@NgModule ({
    declarations: [PainelFotoComponent],
    exports:[PainelFotoComponent],
    imports:[FotoComponent]
})
export class PainelFotoModule{}