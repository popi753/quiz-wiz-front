import apiAxiosInstance from "./apiAxiosInstance";

export default function sanctumCsrfCookie() {
    return true;
    apiAxiosInstance.get(import.meta.env.VITE_BASE_URL + '/sanctum/csrf-cookie');
};