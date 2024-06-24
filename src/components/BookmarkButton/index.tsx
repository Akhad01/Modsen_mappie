import { FaBookmark } from 'react-icons/fa6';

import { Button } from './styled';

export const BookmarkButton = () => {
  return (
    <Button>
      <FaBookmark size={20} color='white' />
    </Button>
  );
};
