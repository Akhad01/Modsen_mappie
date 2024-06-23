import { IconButton } from '@mui/material';

import { BiSolidRightArrow } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { FaBookmark } from 'react-icons/fa6';

import { setSelectedNav } from '../../store/selectors/sidebar';
import {
  CardActions,
  CardContainer,
  CardDescription,
  CardImage,
  CardTitle,
  TitleBox,
} from './styled';

const Card = ({ title, description }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSelectedNav('detail'));
  };

  return (
    <CardContainer>
      <CardImage />
      <TitleBox>
        <CardTitle variant='h6'>{title}</CardTitle>
      </TitleBox>
      <CardDescription variant='body2'>{description}</CardDescription>
      <CardActions>
        <IconButton>
          <FaBookmark color='error' />
        </IconButton>
        <IconButton onClick={handleClick}>
          <BiSolidRightArrow />
        </IconButton>
      </CardActions>
    </CardContainer>
  );
};

export default Card;
