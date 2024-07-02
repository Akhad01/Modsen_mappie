import React from 'react';
import SidebarNav from '../SidebarNav';
import SidebarPanel from '../SidebarPanel';
import { sidebarContent } from '../../constants/sidebar-content';
import { useAppSelector } from '../../hooks/redux';
import { getActiveSidebar } from '../../store/selectors/sidebar-selector';

const Sidebar = () => {
  const sidebarActive = useAppSelector(getActiveSidebar);

  return (
    <>
      <SidebarNav />
      {sidebarActive && (
        <SidebarPanel>{sidebarContent[sidebarActive]}</SidebarPanel>
      )}
    </>
  );
};

export default Sidebar;
