import React from 'react';
import { Avatar, ListItemAvatar, ListItemText } from '@mui/material';

import { ListItemWrapper, StyledList, StyledListContainer } from './styled';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { toggleItemCategories } from '../../store/slices/sidebar';
import { getCategories } from '../../store/selectors/sidebar-selector';
import { Category } from '../../types/category';

const FilterPanel = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(getCategories);

  const handleToggle = (category: Category) => () => {
    dispatch(toggleItemCategories(category.type));
  };

  return (
    <StyledListContainer>
      <StyledList>
        {categories.map((category, index) => (
          <ListItemWrapper
            key={index}
            onClick={handleToggle(category)}
            className={!category.isActive ? 'active' : ''}
          >
            <ListItemAvatar>
              <Avatar src={category.icon} />
            </ListItemAvatar>
            <ListItemText primary={category.text} />
          </ListItemWrapper>
        ))}
      </StyledList>
    </StyledListContainer>
  );
};

export default FilterPanel;
