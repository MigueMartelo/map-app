import { Map } from 'mapbox-gl';
import { MapState } from './MapProvider';

type MapAction = {
  type: 'SET_MAP_STATE';
  payload: Map;
};

export const mapReducer = (state: MapState, action: MapAction): MapState => {
  switch (action.type) {
    case 'SET_MAP_STATE':
      return {
        ...state,
        isMapReady: true,
      };

    default:
      return state;
  }
};
