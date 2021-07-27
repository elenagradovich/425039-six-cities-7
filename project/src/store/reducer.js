import { ActionTypes } from './action-types';
import Immutable from 'seamless-immutable';

const initialCity = 'PARIS';

const initialState = Immutable({
  city: initialCity,
  offersOfCity: [],
  hotels: [],
  authInfo: {},
  nearPlaces: [],
  reviews: [],
  isDataLoaded: false,
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
    default:
      return state;
  }
};
