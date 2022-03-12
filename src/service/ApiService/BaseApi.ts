import axios, { Axios } from "axios";

const api: Axios = axios.create({
    baseURL: 'https://f66b-103-37-201-178.ngrok.io',
});

export default api;