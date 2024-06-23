import SidebarNav from '../SidebarNav';
import SidebarPanel from '../SidebarPanel';
import { sidebarContent } from '../../constants/sidebar-content';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const sidebarActive = useSelector((state) => state.sidebar.selectedNav);

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
