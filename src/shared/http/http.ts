import axios,
{
    AxiosInstance,
    AxiosRequestConfig
} from 'axios';

const config: AxiosRequestConfig = {
    baseURL: 'http://localhost:8000/api/',
    headers: {
        'Content-Type': 'application/json'
    },
    maxContentLength: 2000,
    maxRedirects: 5,
    responseType: 'json',
    timeout: 10000,
    validateStatus: (status: number) => status >= 200 && status < 300,
    withCredentials: false,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
};

// function getToken() {
//     const userdata = localStorage.getItem('userdata');
//     if (userdata) { 
//         return JSON.parse(userdata).access; 
//     } else {
//         return ''; 
//     }
// }

export function createHttpAxios(url: string): AxiosInstance {
    const resultConfig = Object.assign({}, config);
    resultConfig.baseURL += url;
    const axiosInstance = axios.create(resultConfig);
    // axiosInstance.interceptors.request.use((conf: any) => {
    //     conf.headers.Authorization = `Bearer ${getToken()}`;
    //     return conf;
    // });

    return axiosInstance;
}