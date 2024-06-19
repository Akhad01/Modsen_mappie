import {
  Box,
  Button,
  IconButton,
  InputBase,
  Paper,
  TextField,
} from '@mui/material';
import FilterPanel from '../../../FilterPanel';
import { InputWrapper, StyledHeading } from './styled';
import { IoSearch } from 'react-icons/io5';

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
            placeholder='Место, адрес..'
            inputProps={{ 'aria-label': 'search google maps' }}
          />
        </Paper>
        <StyledHeading>Искать:</StyledHeading>
        <FilterPanel />
        <StyledHeading>В радиусе</StyledHeading>
        <InputWrapper>
          <TextField
            id='outlined-number'
            style={{ width: '100px' }}
            label='Number'
            type='number'
            defaultValue={1000}
          />
          <span style={{ marginLeft: '20px' }}>км</span>
        </InputWrapper>
      </Box>
      <Box>
        <Button
          style={{
            display: 'inline-block',
            width: '350px',
            height: '60px',
            borderRadius: '10px',
            marginTop: '100px',
          }}
          variant='contained'
        >
          <IoSearch style={{ marginTop: '5px' }} size={23} />
        </Button>
      </Box>
    </>
  );
};

export default SidebarSearch;
