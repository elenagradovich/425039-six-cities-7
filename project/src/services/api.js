import axios from 'axios';

const BASE_URL = 'https://7.react.pages.academy/six-cities';
const TIME_OUT = 5000;

const HttpCode = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
};

const token = localStorage.getItem('token') ?? '';

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIME_OUT,
    headers: {
      'x-token': token,
    },
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    const { response } = err;
    if (response?.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();
    }
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
