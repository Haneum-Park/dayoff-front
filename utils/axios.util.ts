/* eslint-disable no-param-reassign */
/* eslint-disable implicit-arrow-linebreak */
import axios, { AxiosRequestConfig } from 'axios';

import { validateToken } from '@utils/token.util';
import { cookies, isProduction } from '@utils/common.util';

const requireApiList = [
  { method: 'get', url: 'instance' },
  { method: 'get', url: 'crawler' },
  { method: 'post', url: 'crawler' },
  { method: 'post', url: 'crawler/run' },
];

export const baseUrl = isProduction ? 'https://api.day-off.xyz/' : 'http://localhost:3000/';

const $axios = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
  maxContentLength: 100 * 1024 * 1024,
  maxBodyLength: 100 * 1024 * 1024,
});

$axios.interceptors.request.use(async (config: AxiosRequestConfig) => {
  config.baseURL = baseUrl;
  const { url, method } = config;
  if (
    requireApiList.findIndex(
      (api) => (url as string).indexOf(api.url) > -1 && api.method === method,
    ) > -1
  ) {
    if (validateToken()) {
      const token = cookies.get('accessToken');
      if (!token) return Promise.reject(new Error('You need to Login'));
      if (config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    }
    cookies.del('accessToken');
    return Promise.reject(new Error('You need to Login'));
  }
  return config;
});

$axios.interceptors.response.use(
  (res) => Promise.resolve(res),
  (err) => err.response,
);

export default $axios;
