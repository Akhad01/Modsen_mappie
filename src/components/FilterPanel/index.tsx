import React from 'react';
import { Avatar, ListItemAvatar } from '@mui/material';

import { ListItemWrapper, StyledList, StyledListContainer, StyledListItemText } from './styled';
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
              <Avatar sx={{ width: '35px', height: '35px' }} src={category.icon} />
            </ListItemAvatar>
            <StyledListItemText sx={{ fontSize: '14px' }} primary={category.text} />
          </ListItemWrapper>
        ))}
      </StyledList>
    </StyledListContainer>
  );
};

export default FilterPanel;
