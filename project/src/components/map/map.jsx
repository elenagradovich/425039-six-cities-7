import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { getActiveCityCoords, getCityPoints } from '../../utils/common';

function Map({ hotels, activeCity, currentPlaceId }) {
  const mapRef = useRef(null);
  const activeCityLocation = getActiveCityCoords(hotels, activeCity);
  const pointsOfCity = getCityPoints(hotels, currentPlaceId);

  const URL_MARKER_DEFAULT = '../../img/pin.svg';
  const URL_MARKER_CURRENT = '../../img/pin-active.svg';

  const defaultIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  const currentIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  const map = useMap(mapRef, activeCityLocation);

  useEffect(() => {
    if (map) {
      pointsOfCity.forEach((point) => {
        leaflet
          .marker({
            lat: point.lat,
            lng: point.lng,
          }, {
            icon: point.current ? currentIcon : defaultIcon,
          })
          .addTo(map);
      });
    }
  }, [map, pointsOfCity]);

  return (
    <div
      id='map'
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

Map.propTypes = {
  hotels: PropTypes.array,
  activeCity: PropTypes.string,
  currentPlaceId: PropTypes.number,
};

export default Map;
