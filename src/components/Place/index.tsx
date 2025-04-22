import React, { memo } from 'react';
import { Placemark } from '@pbe/react-yandex-maps';
import { shallowEqual } from 'react-redux';
import { useAppDispatch } from '../../hooks/redux';
import { setPlaceIdAndShowSidebarPanel } from '../../store/slices/sidebar';

interface Props {
  id: number;
  key: number;
  categoriesIcon: string;
  geometry: [number, number];
}

const Place = memo(
  ({ id, key, categoriesIcon, geometry }: Props) => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
      dispatch(setPlaceIdAndShowSidebarPanel(id));
    };

    return (
      <Placemark
        key={key}
        onClick={handleClick}
        options={{
          iconLayout: 'default#image',
          iconImageSize: [32, 32],
          iconImageHref: categoriesIcon,
        }}
        geometry={geometry}
      />
    );
  },
  ({ geometry: prevGeometry }, { geometry: nextGeometry }) => {
    return shallowEqual(prevGeometry, nextGeometry);
  },
);

Place.displayName = 'Place'

export default Place;