import axios, { AxiosRequestConfig } from "axios";
import { getToken, removeToken } from "../store/authStore";

const BASE_URL = 'http://localhost:5173';
const DEFAULT_TIMEOUT = 30000;

export const createClient = (config?: AxiosRequestConfig) => {
  const client = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken() ? getToken() : '',
    },
    withCredentials: true,
    ...config
  });

  client.interceptors.response.use(
    (response) => response,
    (error) =>  {
      if (error.response.status === 401) {
        removeToken();
        window.location.href = '/login';
        return;
      }

      return Promise.reject(error)
    }
  );

  return client;
};

export const httpClient = createClient();
