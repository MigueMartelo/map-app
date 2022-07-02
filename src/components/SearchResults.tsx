import React, { useState } from 'react';
import { useContext } from 'react';
import { MapContext, PlacesContext } from '../context';
import { LoadingPlaces } from '.';
import { Feature } from '../interfaces/places';

export const SearchResults = () => {
  const { places, isLoadingPlaces, userLocation } = useContext(PlacesContext);
  const { map, getRouteBetweenPlaces } = useContext(MapContext);

  const [activeId, setActiveId] = useState('');

  const onPlaceClick = (place: Feature) => {
    const [lng, lat] = place.center;
    setActiveId(place.id);

    map?.flyTo({
      center: [lng, lat],
      zoom: 14,
    });
  };

  const getRoute = async (place: Feature) => {
    if (!userLocation) return;

    const [lng, lat] = place.center;

    getRouteBetweenPlaces(userLocation, [lng, lat]);
  };

  if (isLoadingPlaces) {
    return <LoadingPlaces />;
  }

  if (places.length === 0) {
    return <></>;
  }

  return (
    <ul className='list-group mt-3'>
      {places.map((place) => (
        <li
          className={`list-group-item list-group-item-action pointer ${
            activeId === place.id ? 'active' : ''
          }`}
          key={place.id}
          onClick={() => onPlaceClick(place)}
        >
          <h6>{place.text_es}</h6>
          <p style={{ fontSize: '12px' }} className='text-muted'>
            {place.place_name_es}
          </p>
          <button
            className={`btn btn-sm ${
              activeId === place.id
                ? 'btn-outline-light'
                : 'btn-outline-primary'
            }`}
            onClick={() => getRoute(place)}
          >
            Direcciones
          </button>
        </li>
      ))}
    </ul>
  );
};
