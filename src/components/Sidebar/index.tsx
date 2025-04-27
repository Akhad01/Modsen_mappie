import React from 'react';

import SidebarNav from '../SidebarNav';
import SidebarPanel from '../SidebarPanel';

import { sidebarContent } from '../../constants/sidebar-content';
import { useAppSelector } from '../../hooks/redux';
import { getActiveSidebar } from '../../store/selectors/sidebar-selector';
import { SidebarContainer } from './styled';

const Sidebar = () => {
  const sidebarActive = useAppSelector(getActiveSidebar);

  return (
    <SidebarContainer>
      <SidebarNav />
      {sidebarActive && (
        <SidebarPanel>{sidebarContent[sidebarActive]}</SidebarPanel>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;
