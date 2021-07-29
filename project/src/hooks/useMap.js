import { useEffect, useState } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

function useMap(mapRef, city) {
  const [map, setMap] = useState(null);
  useEffect(() => {
    if (mapRef.current && !map) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.lat,
          lng: city.lng,
        },
        zoom: city.zoom,
        zoomControl: false,
        marker: true,
      });

      leaflet
        .tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        })
        .addTo(instance);

      setMap(instance);
    }
  }, []);

  useEffect(() => {
    if (mapRef && map && city) {
      const { lat, lng, zoom } = city;
      map.setView([lat, lng], zoom, { animation: true });
    }
  }, [city]);

  return map;
}

export default useMap;
