import axios from 'axios';
import { BASE_URL } from '../../config';
const instance = axios.create({
    baseURL: BASE_URL,
});
instance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});
export default instance;