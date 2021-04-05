import axios from 'axios';

const getRequest = {
  baseURL: 'https://tarea-1-breaking-bad.herokuapp.com/api',
  method: 'GET',
};

const fetcher = (url) => axios({ ...getRequest, url }).then((res) => res.data);

export default fetcher;
