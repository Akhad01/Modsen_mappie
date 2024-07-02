import React from 'react';
import { Logoimg, Wrapper } from './styled';
import { logo } from '../../assets/icons';
// import Profile from '../Profile';
import { sidebarMenu } from '../../constants/sidebar-menu';
import SidebarNavItem from '../SidebarNavItem';
import { useAppDispatch } from '../../hooks/redux';
import { removeUser } from '../../store/slices/user-slices';
import { Avatar } from '@mui/material';

const SidebarNav = () => {
  const dispatch = useAppDispatch();
  return (
    <Wrapper>
      <Logoimg src={logo} />
      {sidebarMenu.map((item, i) => (
        <SidebarNavItem type={item.type} key={i}>
          {item.component}
        </SidebarNavItem>
      ))}
      <Avatar
        style={{ marginTop: 'auto' }}
        onClick={() => dispatch(removeUser())}
      >
        logout
      </Avatar>
    </Wrapper>
  );
};

export default SidebarNav;
