import { ActionTypes } from './action-types';
import { AuthorizationStatus } from '../constants/authorization-status';
import Immutable from 'seamless-immutable';

const initialCity = 'PARIS';

const initialState = Immutable({
  city: initialCity,
  offersOfCity: [],
  hotels: [],
  authInfo: {},
  nearPlaces: [],
  reviews: [],
  favoriteHotels: [],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
});

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.CHANGE_ACTIVE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionTypes.CHANGE_OFFERS_OF_CITY:
      return {
        ...state,
        offersOfCity: action.payload,
      };
    case ActionTypes.LOAD_HOTELS: {
      const { hotels } = action.payload;
      return {
        ...state,
        hotels,
        isDataLoaded: true,
      };
    }
    case ActionTypes.LOAD_FAVORITE_HOTELS: {
      const { favoriteHotels } = action.payload;
      return {
        ...state,
        favoriteHotels,
        isDataLoaded: true,
      };
    }
    case ActionTypes.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionTypes.LOAD_AUTH_INFO:
      return {
        ...state,
        authInfo: action.payload,
      };
    default:
      return state;
  }
};
