import React from 'react';

import { setSelectedNav } from '../../store/slices/sidebar';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getActiveSidebar } from '../../store/selectors/sidebar-selector';
import { ReactNode } from 'react';
import { SidebarItem } from '../../types/sidebar';

interface Props {
  children: ReactNode;
  type: SidebarItem;
}

const SidebarNavItem = ({ children, type }: Props) => {
  const dispatch = useAppDispatch();
  const isActiveSidebar = useAppSelector(getActiveSidebar);

  const handleClick = () => {
    dispatch(setSelectedNav(type === isActiveSidebar ? null : type));
  };

  return <div onClick={handleClick}>{children}</div>;
};

export default SidebarNavItem;
