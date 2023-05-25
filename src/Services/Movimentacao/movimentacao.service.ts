import { IDeleteMovimentacaoPathParams } from 'src/interfaces/Movimentacao/IDeleteMovimentacaoPathParams';
import { IPostMovimentacaoResponseData } from './../../interfaces/Movimentacao/IPostMovimentacaoResponseData';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiResponse } from 'src/interfaces/ApiResponse';
import { IMovimentacao } from 'src/interfaces/Movimentacao/IMovimentacao';
import { IPutMovimentacaoBody } from 'src/interfaces/Movimentacao/IPutMovimentacaoBody';
import { IPutMovimentacaoResponseData } from 'src/interfaces/Movimentacao/IPutMovimentacaoResponseData';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {
  private readonly baseURL = 'https://localhost:7005/Movimentacao';
  constructor(private httpClient: HttpClient) {}

  getMovimentacao(skip: number, take: number) {
    return this.httpClient.get<IMovimentacao[]>(
      `${this.baseURL}/?${skip}&${take}`
    );
  }

  postMovimentacao(body: IPostMovimentacaoResponseData) {
    return this.httpClient.post<IApiResponse<IPostMovimentacaoResponseData>>(
      this.baseURL,
      body
    );
  }

  putMovimentacao(body: IPutMovimentacaoBody) {
    return this.httpClient.put<IApiResponse<IPutMovimentacaoResponseData>>(
      this.baseURL,
      body
    );
  }

  deleteMovimentacao({ idMovimentacao }: IDeleteMovimentacaoPathParams) {
    return this.httpClient.delete<IApiResponse<IMovimentacao>>(
      `${this.baseURL}/${idMovimentacao}`
    );
  }
}
