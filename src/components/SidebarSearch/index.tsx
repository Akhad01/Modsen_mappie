import React from 'react';
import { Box, IconButton, InputBase, Paper } from '@mui/material';
import { IoSearch } from 'react-icons/io5';

import FilterPanel from '../FilterPanel';

import { ButtonSearch, InputWrapper, StyledHeading } from './styled';
import RadiusSelector from '../RadiusSelector';

const SidebarSearch = () => {
  return (
    <>
      <Box>
        <Paper
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            height: '60px',
          }}
        >
          <IconButton>
            <IoSearch />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Место, адрес.."
            inputProps={{ 'aria-label': 'search google maps' }}
          />
        </Paper>
        <StyledHeading>Искать:</StyledHeading>
        <FilterPanel />
        <StyledHeading>В радиусе</StyledHeading>
        <InputWrapper>
          <RadiusSelector />
          <span style={{ marginLeft: '20px' }}>км</span>
        </InputWrapper>
      </Box>
      <Box>
        <ButtonSearch variant="contained">
          <IoSearch style={{ marginTop: '5px' }} size={23} />
        </ButtonSearch>
      </Box>
    </>
  );
};

export default SidebarSearch;
