import axios from 'axios';
const API = import.meta.env.VITE_APP_API_URL;

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || `${API}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;