import axios from 'axios';

const getRequest = {
  baseURL: 'https://tarea-1-breaking-bad.herokuapp.com/api',
  method: 'GET',
};

const fetcher = async (url) => {
  const res = await axios({ ...getRequest, url });

  if (!res.headers['content-type'].includes('application/json')) {
    throw Error('Incorrect content-type');
  }

  return res.data;
};
export default fetcher;
