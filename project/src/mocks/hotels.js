export const hotels = [
  {
    'bedrooms': 3,
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10,
      },
      'name': 'Amsterdam',
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    'host': {
      'avatarUrl': '../../../img/avatar-angelina.jpg',
      'id': 3,
      'isPro': true,
      'name': 'Angelina',
    },
    'id': 1,
    'images': ['../../../img/apartment-01.jpg', '../../../img/apartment-02.jpg', '../../../img/apartment-03.jpg',
      '../../../img/apartment-01.jpg', '../../../img/apartment-02.jpg', '../../../img/apartment-03.jpg'],
    'isFavorite': false,
    'isPremium': true,
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.85309666406198,
      'zoom': 8,
    },
    'maxAdults': 4,
    'previewImage': '../../../img/studio-01.jpg',
    'price': 500,
    'rating': 5,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
  },
  {
    'bedrooms': 3,
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10,
      },
      'name': 'Amsterdam',
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    'host': {
      'avatarUrl': '../../../img/avatar-max.jpg',
      'id': 3,
      'isPro': true,
      'name': 'Peter',
    },
    'id': 2,
    'images':['../../../img/apartment-01.jpg', '../../../img/apartment-02.jpg', '../../../img/apartment-03.jpg'],
    'isFavorite': true,
    'isPremium': false,
    'location': {
      'latitude': 52.369553943508,
      'longitude': 4.85309666406198,
      'zoom': 8,
    },
    'maxAdults': 4,
    'previewImage': '../../../img/studio-01.jpg',
    'price': 49,
    'rating': 1,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'private room',
  },
  {
    'bedrooms': 3,
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10,
      },
      'name': 'Amsterdam',
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    'host': {
      'avatarUrl': '../../../img/avatar-angelina.jpg',
      'id': 3,
      'isPro': true,
      'name': 'Laura',
    },
    'id': 3,
    'images': ['../../../img/apartment-01.jpg', '../../../img/apartment-02.jpg', '../../../img/apartment-03.jpg'],
    'isFavorite': true,
    'isPremium': false,
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.929309666406198,
      'zoom': 8,
    },
    'maxAdults': 4,
    'previewImage': '../../../img/studio-01.jpg',
    'price': 15,
    'rating': 2,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
  },
  {
    'bedrooms': 3,
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10,
      },
      'name': 'Amsterdam',
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    'host': {
      'avatarUrl': '../../../img/avatar-max.jpg',
      'id': 4,
      'isPro': true,
      'name': 'Max',
    },
    'id': 4,
    'images': ['../../../img/apartment-01.jpg', '../../../img/apartment-02.jpg', '../../../img/apartment-03.jpg'],
    'isFavorite': true,
    'isPremium': true,
    'location': {
      'latitude': 52.3809553943508,
      'longitude': 4.939309666406198,
      'zoom': 8,
    },
    'maxAdults': 4,
    'previewImage': '../../../img/studio-01.jpg',
    'price': 120,
    'rating': 1,
    'title': 'Wood and stone place',
    'type': 'private room',
  },
  {
    'bedrooms': 3,
    'city': {
      'location': {
        'latitude': 48.853416381336636,
        'longitude': 2.3158155739286115,
        'zoom': 12,
      },
      'name': 'Paris',
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    'host': {
      'avatarUrl': '../../../img/avatar-angelina.jpg',
      'id': 3,
      'isPro': true,
      'name': 'Angelina',
    },
    'id': 5,
    'images': ['../../../img/apartment-01.jpg', '../../../img/apartment-02.jpg', '../../../img/apartment-03.jpg',
      '../../../img/apartment-01.jpg', '../../../img/apartment-02.jpg', '../../../img/apartment-03.jpg'],
    'isFavorite': true,
    'isPremium': true,
    'location': {
      'latitude': 48.86267751259838,
      'longitude': 2.293842916778982,
      'zoom': 8,
    },
    'maxAdults': 4,
    'previewImage': '../../../img/studio-01.jpg',
    'price': 120,
    'rating': 4.8,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
  },
];

export const favoriteHotels = hotels.filter((item) => item.isFavorite);

