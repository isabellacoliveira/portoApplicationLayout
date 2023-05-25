import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiResponse } from 'src/interfaces/ApiResponse';


@Injectable({
  providedIn: 'root'
})
export class RelatorioService {
  private readonly baseURL = 'https://localhost:7005/Relatorio';
  constructor(private httpClient: HttpClient) {}

  getDownloadPDFRelatorio() {
    return this.httpClient.get<IApiResponse<string>>(
      `${this.baseURL}/exportarPDFMovimentacao`
    );
  }
}
