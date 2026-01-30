import axios from 'axios';
const apiAxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    "Accept": 'application/json',
    "Content-Type": 'application/json',
  },
});


// Add token to requests if it exists
// instance.interceptors.request.use((config) => {
//     const token = localStorage.getItem('auth_token');
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// });

export default apiAxiosInstance;



