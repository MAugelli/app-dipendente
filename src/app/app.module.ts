import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DipendeteAggiungiComponent } from './dipendete-aggiungi/dipendete-aggiungi.component';
import { DipendenteListaComponent } from './dipendente-lista/dipendente-lista.component';
import { DipendenteDettaglioComponent } from './dipendente-dettaglio/dipendente-dettaglio.component';

@NgModule({
  declarations: [
    AppComponent,
    DipendeteAggiungiComponent,
    DipendenteListaComponent,
    DipendenteDettaglioComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
