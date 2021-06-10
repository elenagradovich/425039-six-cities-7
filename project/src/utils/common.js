export const getFavoriteCards = (data) => {
  const hotels = new Map();
  let hotelsByPlace = [];
  data && data.forEach((hotel) => {
    const hotelName = hotel.city.name;
    if (hotels.has(hotelName.toUpperCase())) {
      hotelsByPlace = hotels.get(hotelName.toUpperCase());
      hotelsByPlace.push(hotel);
      hotels.set(hotelName.toUpperCase(), hotelsByPlace);
    } else {
      hotels.set(hotelName.toUpperCase(), [hotel]);
    }
  });

  return hotels;
};
