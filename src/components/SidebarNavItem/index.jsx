import { useDispatch, useSelector } from 'react-redux';

import { setSelectedNav } from '../../store/selectors/sidebar';

const SidebarNavItem = ({ children, type }) => {
  const dispatch = useDispatch();
  const isActiveSidebar = useSelector((state) => state.sidebar.selectedNav);

  const handleClick = () => {
    dispatch(setSelectedNav(type === isActiveSidebar ? null : type));
  };

  return <div onClick={handleClick}>{children}</div>;
};

export default SidebarNavItem;
