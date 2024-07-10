import React from 'react';
import { GeolocationControl } from '@pbe/react-yandex-maps';
import { setCenterPosition } from '../../store/slices/map-slice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getLocation } from '../../store/selectors/map-selector';

const CenterGeolocationControl = React.memo(
  function CenterGeolocationControl() {
    const dispatch = useAppDispatch();
    const location = useAppSelector(getLocation);

    const hadleClick = () => {
      dispatch(setCenterPosition(location));
    };
    return <GeolocationControl onClick={hadleClick} />;
  },
);

export default CenterGeolocationControl;
