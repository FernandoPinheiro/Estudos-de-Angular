import { FotoComponent } from './../foto/FotoComponent';
import {Pipe} from '@angular/core'

@Pipe({
 name:  'FiltroPorTitulo'
})
export class FiltroPorTitulo{
    transform(fotos: FotoComponent[] , inputBusca: string){
        return fotos.filter(
            foto => {
                return foto
                        .titulo
                        .toLowerCase()
                        .includes(inputBusca.toLocaleLowerCase())
            }
        )
    }
}