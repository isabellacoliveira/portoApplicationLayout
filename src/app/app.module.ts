import { RelatoriosComponent } from './../pages/Relatorios/Relatorios.component';
import { MovimentacaoComponent } from './../pages/Movimentacao/Movimentacao.component';
import { ContainerComponent } from './../pages/Container/Container.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from 'src/components/Cabecalho/Cabecalho.component';
import { RodapeComponent } from 'src/components/Rodape/Rodape.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    ContainerComponent,
    MovimentacaoComponent,
    RelatoriosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
