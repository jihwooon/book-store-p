import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = 'http://localhost:5173';
const DEFAULT_TIMEOUT = 30000;

export const createClient = (config?: AxiosRequestConfig) => {
  const client = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
    ...config
  });

  client.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
  );

  return client;
};

export const httpClient = createClient();
