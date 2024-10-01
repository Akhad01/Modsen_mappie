import React from 'react';
import { IconButton } from '@mui/material';
import { BiSolidRightArrow } from 'react-icons/bi';
import { FaBookmark } from 'react-icons/fa6';

import { setPlaceIdAndShowSidebarPanel } from '../../store/slices/sidebar-slice';
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
  id: string;
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
      <CardDescription variant="body2">{description}</CardDescription>
      <CardActions>
        <IconButton>
          <FaBookmark color="error" />
        </IconButton>
        <IconButton onClick={handleClick}>
          <BiSolidRightArrow />
        </IconButton>
      </CardActions>
    </CardContainer>
  );
};

export default Card;
