import axios from 'axios';

const api = axios.create({
  baseURL: 'https://happy-gabardine-boa.cyclic.app',
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestData = async (endpoint) => {
  api.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
  const { data } = await api.get(endpoint);
  return data;
};

export const requestLogin = async (endpoint, body) => {
  api.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  const { data } = await api.post(endpoint, body);
  return data;
};

export default api;
