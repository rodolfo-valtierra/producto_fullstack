import axios from 'axios';

axios.defaults.headers.common.Accept = 'application/json';

const fetch = (endpoint) => {
return axios
    .get(endpoint)
    .then((res) => res)
    .catch((err) => {
    console.error(
        'Error catch in Apiutils at fetch method. It will be thrown...');
    throw err;
    });
}

export const getPoints = (user = '', apiKey = '', table = '') => {
  const query = `/get/puntos?api_key=${apiKey}&q=SELECT latitude as lat, longitude lng FROM ${table}`;

  return fetch(query)
    .then(res=> res.data)
    .catch(console.log);
};
