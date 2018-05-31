import axios from 'axios';

class Axios {
    constructor() {
        return axios.create({
            baseURL: 'https://api.com',
            timeout: 1000,
            headers: {'X-Requested-With': 'XMLHttpRequest'},
        });
    }
}

export class Api extends Axios {
    constructor () {
      super();
    //   this.defaults.baseURL = 'https://api.com';
    }
    // cancelOrder (id: number) {
    //   return this.put(`/cancel/order/${id}`);
    // }
  }