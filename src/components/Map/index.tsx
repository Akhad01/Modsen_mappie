import React from 'react';
import { Map as MapY } from '@pbe/react-yandex-maps';

import MapBody from '../MapBody';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getMapSettings } from '../../store/selectors/map-selector';
import { setMapSettings } from '../../store/slices/map-slice';

const Map = () => {
  const mapSettings = useAppSelector(getMapSettings);
  const dispatch = useAppDispatch();

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
