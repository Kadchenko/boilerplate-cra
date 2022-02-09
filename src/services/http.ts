import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface ResponseErrorConfig {
  status?: number;
  message: string;
}

export class ResponseError extends Error {
  status?: number;

  constructor(config: ResponseErrorConfig) {
    super(config.message);
    this.status = config.status;
  }
}

const defaultConfig: AxiosRequestConfig = {
  baseURL: '/',
};

class Http {
  service: AxiosInstance;

  constructor(config = defaultConfig) {
    this.service = axios.create(config);
  }

  async makeRequest<T = any>(method: string, url: string, params?: any, data?: any, headers?: any): Promise<T> {
    // eslint-disable-next-line @typescript-eslint/init-declarations
    let request: Promise<AxiosResponse<T>>;

    switch (method) {
      case 'GET':
        request = this.service.get(url, { params, headers });
        break;
      case 'POST':
        request = this.service.post(url, data, { params, headers });
        break;
      case 'PUT':
        request = this.service.put(url, data, { params, headers });
        break;
      case 'PATCH':
        request = this.service.patch(url, data, { params, headers });
        break;
      case 'DELETE':
        request = this.service.delete(url, { params, headers });
        break;
      default:
        throw new Error('Method not supported');
    }

    return new Promise((resolve, reject) => {
      request
        .then((res) => resolve(res.data))
        .catch((e) => {
          if (e.response) {
            reject(
              new ResponseError({
                status: e.response.status,
                message: e.response.data?.message || e.response.statusText || '',
              })
            );

            return;
          }

          reject(e);
        });
    });
  }

  get<T>(url: string, queryParams?: any, headers?: any) {
    return this.makeRequest<T>('GET', url, queryParams, undefined, headers);
  }

  post<T>(url: string, data?: any, queryParams?: any, headers?: any) {
    return this.makeRequest<T>('POST', url, queryParams, data, headers);
  }

  put<T>(url: string, data?: any, queryParams?: any, headers?: any) {
    return this.makeRequest<T>('PUT', url, queryParams, data, headers);
  }

  patch<T>(url: string, data?: any, queryParams?: any, headers?: any) {
    return this.makeRequest<T>('PATCH', url, queryParams, data, headers);
  }

  delete<T>(url: string, queryParams?: any, headers?: any) {
    return this.makeRequest<T>('DELETE', url, queryParams, headers);
  }
}

export default Http;
