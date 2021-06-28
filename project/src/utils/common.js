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
  switch(sortType) {
    case 'HIGH_TO_LOW':
      return offers.sort(({price: pricePrev}, {price: priceNext}) => {
        if(pricePrev < priceNext) {
          return 1;
        }
        if(pricePrev > priceNext) {
          return  -1;
        }
        return 0;
      });
    case 'LOW_TO_HIGH':
      return offers.sort(({price: pricePrev}, {price: priceNext}) => {
        if(pricePrev > priceNext) {
          return 1;
        }
        if(pricePrev < priceNext) {
          return  -1;
        }
        return 0;
      });
    case 'TOP_RATED_FIRST':
      return offers.sort(({rating: ratingPrev}, {rating: ratingNext}) => {
        if(ratingNext > ratingPrev) {
          return 1;
        }
        if(ratingNext < ratingPrev) {
          return  -1;
        }
        return 0;
      });
    default:
      return offers;
  }
};


