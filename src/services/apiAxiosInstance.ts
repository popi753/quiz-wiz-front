import axios from 'axios';
const apiAxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL + '/api',
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    "Accept": 'application/json',
    "Content-Type": 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
});

export default apiAxiosInstance;



