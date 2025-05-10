import { Avatar, Box, Card, Paper, Skeleton, Typography } from '@mui/material';
import styled from 'styled-components';

export const CardContainer = styled(Card)`
  padding: 20px 20px 35px 20px;
  border-radius: 12px;
  max-width: 440px;
  border: 3px solid #c4c4c4;
  box-shadow: none !important;

  @media (max-width: 700px) {
    padding: 16px;
  }
`;

export const CardDetails = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardTitle = styled(Typography)`
  font-weight: bold;
  margin-top: 10px !important;

  @media (max-width: 700px) {
    font-size: 1.3rem !important;
  }
`;

export const CardIcons = styled(Box)`
  display: flex;
  gap: 8px;
  margin-top: 8px;

  @media (max-width: 700px) {
    margin-top: 0;
  }
`;

export const CardActions = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

export const LoadingContainer = styled(Paper)`
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const LoadingAvatar = styled(Skeleton).attrs({
  variant: 'circular',
  height: 30,
  width: 30
})``;

export const LoadingTitle = styled(Skeleton).attrs({
  variant: 'text',
  width: '60%',
  height: 30
})``;

export const LoadingSubtitle = styled(Skeleton).attrs({
  variant: 'text',
  width: '80%',
  height: 20
})``;

export const LoadingActions = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const LoadingButton = styled(Skeleton).attrs({
  variant: 'rectangular',
  width: 90,
  height: 36
})``;

export const PlaceAvatar = styled(Avatar)`
  width: 35px !important;
  height: 35px !important;
`;

export const CardDescription = styled(Typography).attrs({
  variant: "body2"
})`
  margin-top: 10px;
`;

export const CardActionsContainer = styled(CardActions)`
  margin-top: 10px;
  justify-content: center;
  gap: 16px;

  @media (max-width: 700px) {
    gap: 7px;
    flex-wrap: wrap;
  }
`;
