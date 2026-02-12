import apiAxiosInstance from "./apiAxiosInstance";

export default function sanctumCsrfCookie() {
    apiAxiosInstance.get(import.meta.env.VITE_API_URL + '/sanctum/csrf-cookie');
};