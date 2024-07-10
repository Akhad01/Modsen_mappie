import React from 'react';
import { BookmarkButton } from '../components/BookmarkButton';
import { SearchButton } from '../components/SearchButton';
import { ReactElement } from 'react';
import { SidebarItem } from '../types/sidebar';

interface SidebarMenuItem {
  type: SidebarItem;
  component: ReactElement;
}

export const sidebarMenu: SidebarMenuItem[] = [
  {
    type: 'search',
    component: <SearchButton />,
  },
  { type: 'bookmark', component: <BookmarkButton /> },
];
