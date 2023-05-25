import { Categoria } from './../Enums/Categoria.enum';
import { Status } from '../Enums/Status.enum';
import { Tipo } from '../Enums/Tipo.enum';
import { IMovimentacao } from "../Movimentacao/IMovimentacao";

export interface IContainer {
  cliente: string;
  numeroContainer: string;
  tipo: Tipo;
  status: Status;
  categoria: Categoria;
  movimentacao: IMovimentacao[];
}
