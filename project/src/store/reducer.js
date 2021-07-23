import { ActionTypes } from './action-types';
import { hotels } from '../mocks/hotels';
import { getHotelsOfCity } from '../utils/common';
import Immutable from 'seamless-immutable';

const initialCity = 'PARIS';
const initialOffersOfCity = getHotelsOfCity(hotels, initialCity);

const initialState = Immutable({
  city: initialCity,
  offers: [],
  hotels: [],
  authInfo: {},
  nearPlaces: [],
  reviews: [],
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_ACTIVE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionTypes.CHANGE_OFFERS_OF_CITY:
      return {
        ...state,
        offers: action.payload,
      };
    case ActionTypes.LOAD_HOTELS:
      return {
        ...state,
        hotels: action.payload,
      };
    default:
      return state;
  }
};
