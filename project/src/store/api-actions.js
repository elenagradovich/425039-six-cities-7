import { APIRoutes } from '../constants/api-routs';
import { loadHotels } from '../store/actions';

export const fetchHotels = () => (dispatch, _getState, api) => ({
  api.get(APIRoutes.HOTELS)
    .then(({data}) => dispatch(loadHotels(data)))
});
