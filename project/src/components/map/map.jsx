import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { getActiveCityCoords, getCityPoints } from '../../utils/common';

function Map({ offers, activeCity, currentOfferId }) {
  const mapRef = useRef(null);
  const activeCityLocation = getActiveCityCoords(offers, activeCity);
  const pointsOfCity = getCityPoints(offers, currentOfferId);
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
      pointsOfCity.forEach(({ lat, lng, current }) => {
        leaflet
          .marker({
            lat,
            lng,
          }, {
            icon: current ? currentIcon : defaultIcon,
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
  offers: PropTypes.array,
  activeCity: PropTypes.string,
  currentOfferId: PropTypes.number,
};

export default Map;
