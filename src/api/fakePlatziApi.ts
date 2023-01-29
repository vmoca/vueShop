import axios, { AxiosHeaders, InternalAxiosRequestConfig } from "axios";

// Creo la baseURL que utilizaré para las llamadas a la API
const fakePlatziApi = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1"
})

fakePlatziApi.interceptors.request.use((config:InternalAxiosRequestConfig) => {
    // Accedo el token
    const token = localStorage.getItem("token");
    if (token) {
        (config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`); 
    }
    return config;
});

export default fakePlatziApi;