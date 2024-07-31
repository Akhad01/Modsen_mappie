import React, { ReactNode } from 'react';
import DetailedCard from '../components/DetailedCard';
import SidebarBookmark from '../components/SidebarBookmark';
import SidebarSearch from '../components/SidebarSearch';

interface SidebarContent {
  [key: string]: ReactNode;
}

export const sidebarContent: SidebarContent = {
  search: <SidebarSearch />,
  bookmark: <SidebarBookmark />,
  detail: <DetailedCard />,
};
