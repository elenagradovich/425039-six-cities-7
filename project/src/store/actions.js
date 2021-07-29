import { ActionTypes } from './action-types';
import { getHotelsOfCity } from '../utils/common';
import * as APIRoutes from '../constants/route-pathes';
import { AuthorizationStatus } from '../constants/authorization-status';
import {getHotelCommentsLink, getHotelLink, getNearbyHotelsLink, MAIN} from '../constants/route-pathes';
import humps from 'humps';

export const startLoading = () => ({
  type: ActionTypes.START_LOADING,
});

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
    })
);

export const loadHotel = (id) => (dispatch, _getState, api) => (
  api.get(getHotelLink(id))
    .then(({data}) => {
      const hotel = humps.camelizeKeys(data);
      dispatch({ type: ActionTypes.LOAD_HOTEL, payload: { hotel }});
    })
);

export const requireAuthorization = (status) => ({
  type: ActionTypes.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.LOGIN)
    .then(({data}) => {
      const authInfo = humps.camelizeKeys(data);
      dispatch({ type: ActionTypes.LOAD_AUTH_INFO, payload: authInfo });
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    })
    .catch(() => {})
);

export const redirectToRoute = (url) => ({
  type: ActionTypes.REDIRECT_TO_ROUTE,
  payload: url,
});


export const signIn = ({email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoutes.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(MAIN)))
);

export const loadHotelsNearby = (id) => (dispatch, _getState, api) => (
  api.get(getNearbyHotelsLink(id))
    .then(({data}) => {
      const hotels = humps.camelizeKeys(data);
      dispatch({ type: ActionTypes.LOAD_HOTELS_NEARBY, payload: { hotels }});
    })
);

export const loadHotelComments = (id) => (dispatch, _getState, api) => (
  api.get(getHotelCommentsLink(id))
    .then(({data}) => {
      const comments = humps.camelizeKeys(data);
      dispatch({ type: ActionTypes.LOAD_HOTEL_COMMENTS, payload: { comments }});
    })
);

export const submitComment = (id) => (dispatch, _getState, api) => (
  api.post(getHotelCommentsLink(id))
    .then(({data}) => {
      const hotels = humps.camelizeKeys(data);
      dispatch({ type: ActionTypes.LOAD_HOTELS, payload: { hotels }});
    })
);


