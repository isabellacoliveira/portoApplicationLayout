import { TipoMovimentacao } from "../Enums/TipoMovimentacao.enum";

export interface IMovimentacao {
  TipoMovimentacao: TipoMovimentacao;
  DataInicio: Date;
  DataFim: Date;
  ContainerId: number;
}

