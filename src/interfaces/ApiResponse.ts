export interface IApiResponse<T = null> {
  success: boolean;
  messages: string[];
  data: T;
}
