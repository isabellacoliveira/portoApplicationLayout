import { IPostContainerResponseData } from './../../interfaces/Container/IPostContainerResponseData';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiResponse } from 'src/interfaces/ApiResponse';
import { IContainer } from 'src/interfaces/Container/IContainer';
import { IDeleteContainerPathParams } from 'src/interfaces/Container/IDeleteContainerPathParams';
import { IPutContainerBody } from 'src/interfaces/Container/IPutContainerBody';
import { IPutContainerResponseData } from 'src/interfaces/Container/IPutContainerResponseData';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {
  private readonly baseURL = 'https://localhost:7005/Container';
  constructor(private httpClient: HttpClient) {}

  getContainer(skip: number, take: number) {
    return this.httpClient.get<IContainer[]>(
      `${this.baseURL}/?${skip}&${take}`
    );
  }

  postContainer(body: IPostContainerResponseData) {
    return this.httpClient.post<IApiResponse<IPostContainerResponseData>>(
      this.baseURL,
      body
    );
  }

  putContainer(body: IPutContainerBody) {
    return this.httpClient.put<IApiResponse<IPutContainerResponseData>>(
      this.baseURL,
      body
    );
  }

  deleteContainer({ idContainer }: IDeleteContainerPathParams) {
    return this.httpClient.delete<IApiResponse<IContainer>>(
      `${this.baseURL}/${idContainer}`
    );
  }
}
