import { useContext } from 'react';
import { PlacesContext } from '../context';
import { Loading } from '.';

export const MapView = () => {
  const { isLoading, userLocation } = useContext(PlacesContext);

  if (isLoading) {
    return <Loading />;
  }
  return <div>{userLocation?.join(',')}</div>;
};
