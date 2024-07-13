import React from 'react';
import { Avatar, ListItemAvatar, ListItemText } from '@mui/material';

import { ListItemWrapper, StyledList, StyledListContainer } from './styled';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { toggleItemCategories } from '../../store/slices/sidebar-slice';
import { getCategories } from '../../store/selectors/sidebar-selector';

interface CategoryItem {
  type: string;
  icon: string;
  text: string;
  isActive: boolean;
}

const FilterPanel = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector(getCategories);

  const handleToggle = (category: CategoryItem) => () => {
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
