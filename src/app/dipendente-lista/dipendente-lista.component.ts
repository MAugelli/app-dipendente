import { Component } from '@angular/core';
import { Dipendente } from '../dipendente';

@Component({
  selector: 'app-dipendente-lista',
  templateUrl: './dipendente-lista.component.html',
  styleUrls: ['./dipendente-lista.component.css']
})
export class DipendenteListaComponent {
  
  items:Dipendente[] = []


  onNuovo(v:Dipendente){
    this.items.push(v)
  }

  
}
