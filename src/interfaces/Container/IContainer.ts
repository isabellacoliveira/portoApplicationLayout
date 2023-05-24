import { Categoria } from './../Enums/Categoria.enum';
import { Status } from '../Enums/Status.enum';
import { Tipo } from '../Enums/Tipo.enum';
import { IMovimentacao } from "../Movimentacao/IMovimentacao";

export interface IContainer {
  Cliente: string;
  NumeroContainer: string;
  Tipo: Tipo;
  Status: Status;
  Categoria: Categoria;
  Movimentacao: IMovimentacao[];
}
