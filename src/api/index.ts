import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { urlApi } from '../constants';

class Api {
    protected instanceApi: AxiosInstance;

    constructor() {
        this.instanceApi = axios.create({
            baseURL: urlApi,
            headers: {
                Accept: 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        });
    }

    protected async get<T>(
        url: string,
        config?: Object
    ): Promise<AxiosResponse<T>> {
        return this.instanceApi.get<T>(url, config);
    }

    protected async post<T, V>(
        url: string,
        data: FormData | V
    ): Promise<AxiosResponse<T>> {
        if (data instanceof FormData) {
            return this.instanceApi.post<T>(url, data, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
        }
        return this.instanceApi.post<T>(url, data);
    }

    protected async delete(url: string): Promise<AxiosResponse> {
        return this.instanceApi.delete(url);
    }

    protected async put<T, V>(url: string, data: V): Promise<AxiosResponse<T>> {
        return this.instanceApi.put<T>(url, data);
    }
    protected async patch<T, V>(
        url: string,
        data: V
    ): Promise<AxiosResponse<T>> {
        return this.instanceApi.patch<T>(url, data);
    }
}

export default Api;
