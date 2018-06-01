import { AxiosInstance, AxiosPromise } from 'axios';
import { createHttpAxios } from './http';

export class BaseService {
    public httpAxios: AxiosInstance;

    constructor(url: string) {
        this.httpAxios = createHttpAxios(url);
    }

    public create(item: any): AxiosPromise<any> {
        return this.httpAxios.post('', item)
            .then(response => response)
            .catch(err => {
                throw err;
            });
    }

    public update(item: any): AxiosPromise<any> {
        return this.httpAxios.put(item.id + '/', item)
            .then(response => response)
            .catch(err => {
                throw err;
            });
    }

    public delete(itemId: string | number): AxiosPromise<void> {
        return this.httpAxios.delete(itemId + '/')
            .then(response => response)
            .catch(err => {
                throw err;
            });
    }

    public getAll(/*page: number, limit: number*/): AxiosPromise<any[]> {
        return this.httpAxios.get('')
            .then(response => response)
            .catch(err => {
                throw err;
            });
    }

    public getById(itemId: string | number): AxiosPromise<any> {
        return this.httpAxios.get(itemId + '/')
            .then(response => response)
            .catch(err => {
                throw err;
            });
    }

}