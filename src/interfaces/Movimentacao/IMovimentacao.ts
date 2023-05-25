import { TipoMovimentacao } from "../Enums/TipoMovimentacao.enum";

export interface IMovimentacao {
  tipoMovimentacao: TipoMovimentacao;
  dataInicio: Date;
  dataFim: Date;
  containerId: number;
}

