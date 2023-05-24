import { CabecalhoComponent } from 'src/components/Cabecalho/Cabecalho.component';
import { RelatoriosComponent } from './../pages/Relatorios/Relatorios.component';
import { MovimentacaoComponent } from './../pages/Movimentacao/Movimentacao.component';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './../pages/Container/Container.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: CabecalhoComponent,
    children: [
      {
        path: 'Container',
        component: ContainerComponent
      },
      {
        path: 'Movimentacao',
        component: MovimentacaoComponent
      },
      {
        path: 'EmitirRelatorio',
        component: RelatoriosComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
