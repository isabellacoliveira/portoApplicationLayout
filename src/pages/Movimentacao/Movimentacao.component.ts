import { IMovimentacao } from './../../interfaces/Movimentacao/IMovimentacao';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovimentacaoService } from 'src/Services/Movimentacao/movimentacao.service';

@Component({
  selector: 'app-Movimentacao',
  templateUrl: './Movimentacao.component.html',
  styleUrls: ['./Movimentacao.component.css']
})
export class MovimentacaoComponent implements OnInit {
  subscriptions$ = new Subscription();
  movimentacoes: IMovimentacao[];
  skip: number;
  take: number;

  constructor(private movimentacaoService: MovimentacaoService) { }
  ngOnInit() {
    this.getContainer();
  }

  async getContainer() {
    this.subscriptions$.add(
      this.movimentacaoService
        .getMovimentacao(this.skip = 1, this.take = 50)
        .subscribe({
          next: (result) => {
            this.movimentacoes = result;
            console.log(this.movimentacoes)
          }
        })
    );
  }
}
