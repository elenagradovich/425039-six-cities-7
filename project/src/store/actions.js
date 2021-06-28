import { ActionTypes } from './action-types';
import { hotels} from '../mocks/hotels';
import { getHotelsOfCity } from '../utils/common';

export const updateCity = (city) => ({
  type: ActionTypes.CHANGE_ACTIVE_CITY,
  payload: city,
});

export const updateOffersOfCity = (city) => ({
  type: ActionTypes.CHANGE_OFFERS_OF_CITY,
  payload: getHotelsOfCity(hotels, city),
});
