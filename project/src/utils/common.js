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
