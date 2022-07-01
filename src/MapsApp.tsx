import React from 'react';
import { PlacesProvider } from './context';

export const MapsApp = () => {
  return (
    <PlacesProvider>
      <h1>Hola Mundo de nuevo</h1>
    </PlacesProvider>
  );
};
