import React from 'react';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';

import { StyledList, StyledListContainer } from './styled';
import { categories } from '../../constants/categories';

const FilterPanel = () => {
  return (
    <StyledListContainer>
      <StyledList>
        {categories.map((category, index) => (
          <ListItem key={index} disabled={category.disabled}>
            <ListItemAvatar>
              <Avatar src={category.icon} />
            </ListItemAvatar>
            <ListItemText primary={category.text} />
          </ListItem>
        ))}
      </StyledList>
    </StyledListContainer>
  );
};

export default FilterPanel;
