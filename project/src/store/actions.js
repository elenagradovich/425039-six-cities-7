import { ActionTypes } from './action-types';
import { getHotelsOfCity } from '../utils/common';
import * as APIRoutes from '../constants/route-pathes';
import humps from 'humps';


export const updateCity = (city) => ({
  type: ActionTypes.CHANGE_ACTIVE_CITY,
  payload: city,
});

export const updateOffersOfCity = (hotels, city) => ({
  type: ActionTypes.CHANGE_OFFERS_OF_CITY,
  payload: getHotelsOfCity(hotels, city),
});

export const loadHotels = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.HOTELS)
    .then(({data}) => {
      const hotels = humps.camelizeKeys(data);
      dispatch({ type: ActionTypes.LOAD_HOTELS, payload: { hotels }});
      dispatch({ type: ActionTypes.CHANGE_OFFERS_OF_CITY, payload: getHotelsOfCity(hotels, _getState().city)});
      //updateOffersOfCity(_getState().hotels, _getState().city);
    })
);
