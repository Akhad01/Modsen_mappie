import React from 'react';
import { Box } from '@mui/material';
import FilterPanel from '../FilterPanel';
import SearchPanel from '../SearchPanel'

import { InputWrapper, StyledHeading } from './styled';
import RadiusSelector from '../RadiusSelector';

const SidebarSearch = () => {
  return (
    <Box>
      <SearchPanel />
      <StyledHeading>Искать:</StyledHeading>
      <FilterPanel />
      <StyledHeading>В радиусе</StyledHeading>
      <InputWrapper>
        <RadiusSelector />
        <span style={{ marginLeft: '20px' }}>м</span>
      </InputWrapper>
    </Box>
  );
};

export default SidebarSearch;
