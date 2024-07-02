import { Box, Button, Card, Typography } from '@mui/material';
import styled from 'styled-components';

export const CardContainer = styled(Card)`
  padding: 20px 20px 35px 20px;
  border-radius: 12px;
  width: 440px;
  border: 3px solid #c4c4c4;
  box-shadow: none !important;
`;

// export const CardImage = styled(CardMedia)`
//   height: 200px;
//   border-radius: 8px;
// `;

export const CardDetails = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 16px;
`;

export const CardTitle = styled(Typography)`
  font-weight: bold;
  margin-top: 16px;
`;

export const CardDescription = styled(Typography)`
  color: #757575;
  margin-top: 8px;
`;

export const CardIcons = styled(Box)`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

export const CardActions = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

export const ButtonAction = styled(Button)`
  border: '3px solid #C4C4C4';
  color: '#808080';
`;
