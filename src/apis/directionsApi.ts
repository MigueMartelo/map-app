import axios from 'axios';

const directionsApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token:
      'pk.eyJ1IjoibWlndWVtYXJ0ZWxvIiwiYSI6ImNsNTM1anhuMDBqankzam9jdDV3ZDIxZDEifQ.sxRBS0RsklrAGBoFV8mklQ',
  },
});

export default directionsApi;
