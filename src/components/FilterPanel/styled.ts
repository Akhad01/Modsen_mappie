import { List, ListItem } from '@mui/material';
import styled from 'styled-components';

export const StyledListContainer = styled(List)`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  height: 490px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 5px;
    border: 2px solid #f1f1f1;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

export const StyledList = styled(List)`
  padding: 10px;
`;

export const ListItemWrapper = styled(ListItem)`
  cursor: pointer;

  &.active {
    opacity: 0.4;
  }
`;
