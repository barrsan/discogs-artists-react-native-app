import axios from 'axios';
import { IApiInstance } from '../types';

export default (params: IApiInstance) => {
  const { baseURL, headers } = params;

  const instanceConfig = {
    baseURL,
    headers,
    timeout: 10000,
  };

  return axios.create(instanceConfig);
};
