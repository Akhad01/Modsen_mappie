import { Box, Card, Typography } from '@mui/material';
import styled from 'styled-components';

export const CardContainer = styled(Card)`
  padding: 20px 20px 35px 20px;
  margin: 16px 0;
  padding: 20px;
  border: 3px solid #c4c4c4;
  border-radius: 12px;
  max-width: 440px;
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
  justify-content: end;
  margin-top: 20px;
`;
