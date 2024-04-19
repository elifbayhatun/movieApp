import axios from 'axios';
import {apiKey, token} from '../constants';

const BASE_URL = 'https://api.themoviedb.org/3';

export const axiosAgent = axios.create({
  BASE_URL,
  params: {api_Key: apiKey},
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});
