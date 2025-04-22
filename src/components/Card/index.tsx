import React from 'react';
import { IconButton } from '@mui/material';
import { BiSolidRightArrow } from 'react-icons/bi';

import { setPlaceIdAndShowSidebarPanel } from '../../store/slices/sidebar';
import {
  CardActions,
  CardContainer,
  CardDescription,
  CardTitle,
  TitleBox,
} from './styled';
import { useAppDispatch } from '../../hooks/redux';

interface Props {
  title: string;
  description: string;
  id: number;
}

const Card = ({ id, title, description }: Props) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setPlaceIdAndShowSidebarPanel(id));
  };

  return (
    <CardContainer>
      <TitleBox>
        <CardTitle variant="h6">{title}</CardTitle>
      </TitleBox>
      <CardDescription variant="body2">{description ?? 'Описание отсутствует'}</CardDescription>
      <CardActions>
        <IconButton onClick={handleClick}>
          <BiSolidRightArrow />
        </IconButton>
      </CardActions>
    </CardContainer>
  );
};

export default Card;
