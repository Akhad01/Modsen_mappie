import { Box, Card, CardMedia, Typography } from '@mui/material';
import styled from 'styled-components';

export const CardContainer = styled(Card)`
  margin: 16px 0;
  padding: 20px;
  border: 3px solid #c4c4c4;
  border-radius: 12px;
`;

export const CardImage = styled(CardMedia)`
  width: 100%;
  height: 99px;
  border-radius: 8px;
  background-color: grey;
  margin-bottom: 20px;
`;

export const TitleBox = styled(Box)`
  margin-bottom: 20px;
`;

export const CardTitle = styled(Typography)`
  font-weight: bold;
  size: 16px;
  line-height: 20.45px !important;
`;

export const CardDescription = styled(Typography)`
  color: #373737;
  size: 10px;
`;

export const CardActions = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
