import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://frontend-test.idaproject.com/api/'
});

instance.interceptors.response.use(response => {
    return response;
}, error => {
    if (!error.response) {
        console.error(error.data);
    };
    return Promise.reject(error.response);
});

export default instance;
