import { Cities } from '../constants/map';

export const getFavoriteHotels = (hotels) => {
  const favoriteHotels = new Map();
  hotels.forEach((hotel) => {
    const hotelName = hotel.city?.name.toUpperCase();
    favoriteHotels.set(
      hotelName,
      [
        ...favoriteHotels.get(hotelName) || [],
        hotel,
      ],
    );
  });
  return favoriteHotels;
};

export const getActiveCityCoords = (hotels, activeCityKey) => {
  const activeCity = [...hotels].find((hotel) => hotel.city.name === Cities[activeCityKey]);
  if(activeCity) {
    const { latitude, longitude, zoom } = activeCity?.city.location;
    return {
      lat: latitude,
      lng: longitude,
      zoom,
    };
  }
  return null;
};

export const getCityPoints = (hotels, activePlaceId) => [...hotels].map(({location, id}) => {
  const hotelLocation = {
    lat: location.latitude,
    lng: location.longitude,
    current: id === activePlaceId,
  };
  return hotelLocation;
});

export const getHotelsOfCity = (hotels, activeCity) => {
  if(activeCity) {
    return hotels.filter((hotel) => hotel.city.name === Cities[activeCity]);
  }
  return [];
};

export const sortOffers = (offers, sortType) => {
  const SortTypes = {
    HIGH_TO_LOW: ({price: pricePrev}, {price: priceNext}) => (priceNext - pricePrev),
    LOW_TO_HIGH: ({price: pricePrev}, {price: priceNext}) => (pricePrev - priceNext),
    TOP_RATED_FIRST: ({rating: ratingPrev}, {rating: ratingNext}) => (ratingNext - ratingPrev),
  };
  if(sortType in SortTypes) {
    return [...offers].sort(SortTypes[sortType]);
  }

  return offers;
};


