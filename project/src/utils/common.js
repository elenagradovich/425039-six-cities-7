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
  const activeCity = hotels.find((hotel) => hotel.city.name === Cities[activeCityKey]);
  if(activeCity) {
    const activeCityLocation = activeCity?.city.location;
    return {
      lat: activeCityLocation.latitude,
      lng: activeCityLocation.longitude,
      zoom: activeCityLocation.zoom,
    };
  }
  return null;
};

export const getCityPoints = (hotels, activePlaceId) => [...hotels].map((hotel) => {
  const hotelLocation = {
    'lat': hotel?.location.latitude,
    'lng': hotel?.location.longitude,
    'current': hotel.id === activePlaceId,
  };
  return hotelLocation;
});

export const getHotelsOfCity = (hotels, activeCity) => {
  if(activeCity) {
    return hotels.filter((hotel) => hotel?.city.name === Cities[activeCity]);
  }

  return [];
};


