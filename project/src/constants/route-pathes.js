export const MAIN = '/';
export const LOGIN = '/login';
export const FAVORITES = '/favorites';
export const OFFER ='/offer/:id';

export const getOfferLink = (id) => OFFER.replace(':id', id);
