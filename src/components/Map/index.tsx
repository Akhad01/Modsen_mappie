import React, { useContext, useEffect } from 'react';
import { Map as MapY } from '@pbe/react-yandex-maps';

import MapBody from '../MapBody';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getMapSettings } from '../../store/selectors/map-selector';
import { setMapSettings } from '../../store/slices/map/map-slice';
import { MapContext } from '../../context/MapContext';
import { useSearchParams } from 'react-router-dom';

const Map = () => {
  const dispatch = useAppDispatch();
  const mapSettings = useAppSelector(getMapSettings);
  const [, setSearchParams] = useSearchParams()
  const { mapRef } = useContext(MapContext)

  useEffect(() => {
    const timer = setTimeout(() => setSearchParams({
      lat: `${mapSettings.center[0]}`,
      lon: `${mapSettings.center[1]}`,
      zoom: `${mapSettings.zoom}`,
    }, { replace: true }), 700)
    return () => clearTimeout(timer)
  })

  const handleBoundsChange = (event: ymaps.IEvent) => {
    const map = event.get('target');
    const [lat, lon] = map.getCenter();
    const zoom = map.getZoom();
    dispatch(setMapSettings({ center: [lat, lon], zoom }));
  };

  return (
    <MapY
      height="100%"
      width="100%"
      state={mapSettings}
      onBoundsChange={handleBoundsChange}
      instanceRef={mapRef!}
      options={{
        suppressMapOpenBlock: true,
        copyrightProvidersVisible: false,
        copyrightLogoVisible: false,
        copyrightUaVisible: false,
      }}
    >
      <MapBody />
    </MapY>
  );
};

export default Map;
