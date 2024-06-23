import { BookmarkButton } from '../components/BookmarkButton';
import { SearchButton } from '../components/SearchButton';

export const sidebarMenu = [
  {
    type: 'search',
    component: <SearchButton />,
  },
  { type: 'bookmark', component: <BookmarkButton /> },
];
