import { Component, EventEmitter, Output} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Dipendente } from '../dipendente';

@Component({
  selector: 'app-dipendete-aggiungi',
  templateUrl: './dipendete-aggiungi.component.html',
  styleUrls: ['./dipendete-aggiungi.component.css']
})

export class DipendeteAggiungiComponent {
  @Output() outputNuovo = new EventEmitter<Dipendente>();
  form= new FormGroup({
    nome: new FormControl,
    cognome: new FormControl,
    email: new FormControl,
    nascita: new FormControl
    
  })
  
  onSubmit(){
    let nuovo=new Dipendente(Math.floor(Math.random() * (100 - 1) + 1), this.form.value.nome, this.form.value.cognome ,this.form.value.email,this.form.value.nascita)
    this.outputNuovo.emit(nuovo)
  }
  
}
