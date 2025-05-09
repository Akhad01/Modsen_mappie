import React, { useState } from 'react';
import { AiOutlineLogout as Logout } from 'react-icons/ai';
import { Menu, MenuItem } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import { MdPersonAddAlt1 as PersonIcon } from 'react-icons/md';
import { logo } from '../../assets/icons';
import { sidebarMenu } from '../../constants/sidebar-menu';
import SidebarNavItem from '../SidebarNavItem';
import { useAppDispatch } from '../../hooks/redux';
import { removeUser } from '../../store/slices/user-slices';
import { Logoimg, UserAvatar, Wrapper } from './styled';
import { useAuth } from '../../hooks/use-auth';
import { useNavigate } from 'react-router-dom';
import { removeAccessToken } from '../../utils/localStorage';

const SidebarNav = () => {
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(removeUser());
    removeAccessToken()
    navigate('/login');
  };

  const handeleLogin = () => {
    navigate('/registration');
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const { isAuth } = useAuth();

  return (
    <Wrapper>
      <Logoimg src={logo} />
      {sidebarMenu.map((item, i) => (
        <SidebarNavItem type={item.type} key={i}>
          {item.component}
        </SidebarNavItem>
      ))}

      <UserAvatar onClick={handleClick}>
        A
      </UserAvatar>
      <Menu
        onClick={handleClose}
        onClose={handleClose}
        anchorEl={anchorEl}
        open={open}
      >
        {isAuth ? (
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            Logout
          </MenuItem>
        ) : (
          <>
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              Login
            </MenuItem>
            <MenuItem onClick={handeleLogin}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              Add another account
            </MenuItem>
          </>
        )}
      </Menu>
    </Wrapper>
  );
};

export default SidebarNav;
