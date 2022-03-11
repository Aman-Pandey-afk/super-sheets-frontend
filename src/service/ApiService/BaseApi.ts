import axios, { Axios } from "axios";

const api: Axios = axios.create({
    baseURL: 'http://localhost:8000',
});

export default api;