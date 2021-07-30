export const MAIN = '/';
export const LOGIN = '/login';
export const FAVORITES = '/favorites';
export const HOTELS = '/hotels';
export const OFFER ='/offer/:id';
export const NOT_FOUND = '/404';
export const getOfferLink = (id) => OFFER.replace(':id', id);

export const HOTEL = '/hotels/:id';
export const getHotelLink = (id) => HOTEL.replace(':id', id);
export const NEARBY_HOTELS = '/hotels/:hotel_id/nearby';
export const getNearbyHotelsLink = (id) => NEARBY_HOTELS.replace(':hotel_id', id);
export const COMMENTS = 'comments/:hotel_id';
export const getHotelCommentsLink = (id) => COMMENTS.replace(':hotel_id', id);
export const LOGOUT = '/logout';
