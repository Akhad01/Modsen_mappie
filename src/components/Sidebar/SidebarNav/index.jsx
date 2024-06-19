import { IoSearch } from 'react-icons/io5';
import { FaBookmark } from 'react-icons/fa6';

import { BookmarkButton, Logoimg, SearchButton, Wrapper } from '../styled';
import { logo } from '../../../assets/icons';
import Profile from '../../Profile';

const SidebarNav = () => {
  return (
    <Wrapper>
      <Logoimg src={logo} />
      <SearchButton>
        <IoSearch size={22} color='#5E7BC7' />
      </SearchButton>
      <BookmarkButton>
        <FaBookmark size={20} color='white' />
      </BookmarkButton>
      <Profile />
    </Wrapper>
  );
};

export default SidebarNav;
