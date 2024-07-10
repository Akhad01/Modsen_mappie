import React, { ChangeEvent, useEffect, useRef } from 'react';
import { TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getMapRadius } from '../../store/selectors/map-selector';
import { setRadius } from '../../store/slices/map-slice';

const RadiusSelector = () => {
  const inputRef = useRef<HTMLInputElement>();
  const radius = useAppSelector(getMapRadius);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = radius.toString();
    }
  }, [radius]);

  const handleRadiusChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setRadius(Number(event.target.value)));
  };

  return (
    <TextField
      id="outlined-number"
      style={{ width: '100px' }}
      label="Number"
      type="number"
      onChange={handleRadiusChange}
      value={radius}
      inputRef={inputRef}
    />
  );
};

export default RadiusSelector;
