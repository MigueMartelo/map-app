import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';

import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1IjoibWlndWVtYXJ0ZWxvIiwiYSI6ImNsNTM1anhuMDBqankzam9jdDV3ZDIxZDEifQ.sxRBS0RsklrAGBoFV8mklQ';

if (!navigator.geolocation) {
  alert('Geolocation is not supported by your browser');
  throw new Error('Geolocation is not supported by your browser');
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
