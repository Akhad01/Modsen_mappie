import React from 'react';
import { Box, Typography } from '@mui/material';
import Card from '../Card';
import { items } from './config';

const FavoriteList = () => {
  return (
    <Box>
      <Typography variant="h5">Избранное:</Typography>
      {items.map((item, index) => (
        <Card key={index} title={item.title} description={item.description} />
      ))}
    </Box>
  );
};

export default FavoriteList;
