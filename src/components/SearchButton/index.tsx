import React from 'react';
import { IoSearch } from 'react-icons/io5';

import { Button } from './styled';

export const SearchButton = () => {
  return (
    <Button>
      <IoSearch size={22} color="#5E7BC7" />
    </Button>
  );
};
