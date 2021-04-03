import axios from 'axios';

const getRequest = {
  baseURL: 'https://tarea-1-breaking-bad.herokuapp.com/api',
  method: 'GET',
};

const fetchSeries = (url, series) => (
  axios({ ...getRequest, url, params: { series } }).then((res) => res.data)
);

const fetchCharacterByName = (name) => (
  axios({ ...getRequest, url: '/characters', params: { name } }).then((res) => res.data)
);

const fetcher = (url) => axios({ ...getRequest, url }).then((res) => res.data);

export {
  fetchCharacterByName,
  fetchSeries,
};

export default fetcher;
