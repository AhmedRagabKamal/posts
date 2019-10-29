import axios from 'axios';
import { toast } from 'react-toastify';
import { log } from './services/logService';

const http = axios.create({});

http.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    log(error);
    toast.error('unexpected error occur');
  }
  Promise.reject(error);
});

export default http;
