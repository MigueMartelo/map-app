import axios from 'axios';

const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 5,
    language: 'es',
    access_token:
      'pk.eyJ1IjoibWlndWVtYXJ0ZWxvIiwiYSI6ImNsNTM1anhuMDBqankzam9jdDV3ZDIxZDEifQ.sxRBS0RsklrAGBoFV8mklQ',
  },
});

export default searchApi;
