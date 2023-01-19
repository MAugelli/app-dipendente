import { Component, Input } from '@angular/core';
import { Dipendente } from '../dipendente';

@Component({
  selector: 'app-dipendente-dettaglio',
  templateUrl: './dipendente-dettaglio.component.html',
  styleUrls: ['./dipendente-dettaglio.component.css']
})
export class DipendenteDettaglioComponent {

  @Input() data:Dipendente[]=[]

  

}
