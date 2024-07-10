import React from 'react';
import { Avatar, Button, CardActions, CardMedia } from '@mui/material';

import { FaBookmark, FaLocationDot } from 'react-icons/fa6';
import { monument, nature } from '../../assets/filter-icon';
import {
  ButtonAction,
  CardContainer,
  CardDescription,
  CardDetails,
  CardIcons,
  CardTitle,
} from './styled';
import { description, image, title } from './config';

const DetailedCard = () => {
  return (
    <CardContainer>
      <CardMedia component="img" alt={image} image={image} />
      <CardDetails>
        <CardIcons>
          <Avatar sx={{ width: 30, height: 30 }} src={nature} />
          <Avatar sx={{ width: 30, height: 30 }} src={monument} />
        </CardIcons>
        <CardTitle variant="h6">{title}</CardTitle>
        <CardDescription variant="body2">{description}</CardDescription>
        <CardActions>
          <ButtonAction
            variant="outlined"
            startIcon={<FaBookmark color="#808080" />}
          >
            Сохранено
          </ButtonAction>
          <Button variant="contained" startIcon={<FaLocationDot />}>
            Маршрут
          </Button>
        </CardActions>
      </CardDetails>
    </CardContainer>
  );
};

export default DetailedCard;
