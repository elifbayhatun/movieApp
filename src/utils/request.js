import {axiosAgent} from '../libs/axios';

const responseBody = response => response.data;

export const request = {
  get: (url, params = {}) => axiosAgent.get(url, {params}).then(responseBody),
  post: (url, data = {}) => axiosAgent.post(url, data).then(responseBody),
};
