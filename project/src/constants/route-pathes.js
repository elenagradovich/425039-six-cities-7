export const MAIN = '/';
export const LOGIN = '/login';
export const FAVORITES = '/favorites';
export const OFFER ='/offer/:id';
export const HOTELS = '/hotels';

export const getOfferLink = (id) => OFFER.replace(':id', id);
