import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://192.168.100.7:8000',
  headers: {
    'Accept-Language': 'en',
    "Accept": 'application/json',
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
